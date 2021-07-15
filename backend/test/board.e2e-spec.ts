import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { CreateBoardDto } from 'src/board/dto/create-board.dto'
import { ResCode } from 'src/common/handleResult'
import { getConnection } from 'typeorm'
import { PatchBoardDto } from 'src/board/dto/patch-board.dto'
import { BoardTypeCode } from 'src/common/codeEnum'
import {
    boardSetting,
    board_info,
    getApp,
    loginSetting,
    user_info1 as user_info,
} from './testFn'

describe('BoardController (e2e)', () => {
    let app: INestApplication
    beforeAll(async () => {
        app = await getApp()
        await app.init()
    })

    let access_token: string | null = null
    let user_uuid: string = ''

    it('user setting', async () => {
        const [res_user_uuid, res_access_token] = await loginSetting(
            user_info,
            app,
        )
        access_token = res_access_token
        user_uuid = res_user_uuid
    })

    describe('/board', () => {
        const name = '새로운 테스트 보드'
        const length = 7
        const type = BoardTypeCode.zigzag
        const color_bg = '#000000'

        const path = '/board'
        let board_seq: string = ''
        it('GET 200 - OK', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .expect([])
        })
        it('POST 401 - Unauthorized 로그인 안함', () => {
            const createBoardDto: CreateBoardDto = {
                name: name,
                length: length,
                type: type,
                color_bg: color_bg,
            }

            return request(app.getHttpServer())
                .post(path)
                .send(createBoardDto)
                .expect(ResCode.Unauthorized)
        })
        it('POST 400 - BadRequest 이상한 구성', () => {
            const createBoardDto: CreateBoardDto = {
                name: name,
                length: NaN,
                type: type,
                color_bg: color_bg,
            }
            return request(app.getHttpServer())
                .post(path)
                .set('Authorization', `Bearer ${access_token}`)
                .send(createBoardDto)
                .expect(ResCode.BadRequest)
        })
        it('POST 201 - Created', () => {
            const createBoardDto: CreateBoardDto = {
                name: name,
                length: length,
                type: type,
                color_bg: color_bg,
            }
            return request(app.getHttpServer())
                .post(path)
                .set('Authorization', `Bearer ${access_token}`)
                .send(createBoardDto)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.identifiers[0].board_seq).toBeDefined()
                    board_seq = res.body.identifiers[0].board_seq
                })
        })
        it('log confirm', () => {
            return request(app.getHttpServer())
                .get(path + '/' + board_seq + '/log')
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(1)
                })
        })
        it('DELETE 202 - Deleted', () => {
            return request(app.getHttpServer())
                .delete(path)
                .expect(ResCode.Deleted)
        })
    })

    describe('/board/:board_seq', () => {
        it('GET 204 - NoContent', () => {
            return request(app.getHttpServer())
                .get('/board/9999')
                .expect(ResCode.NoContent)
        })

        let board_seq: number | null = null
        let path: string = ''

        it('board setting', async () => {
            board_seq = await boardSetting(board_info, access_token, app)
            path = '/board/' + board_seq
        })

        it('GET 200 - OK', async () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.name).toEqual(board_info.name)
                    expect(res.body.owner.email).toEqual(user_info.email)
                })
        })

        it('POST 404 - NotFound', () => {
            return request(app.getHttpServer())
                .post(path)
                .expect(ResCode.NotFound)
        })

        it('PATCH 401 - Unauthorized', () => {
            const patchBoardDto: PatchBoardDto = {
                name: 'Ulla2',
            }
            return request(app.getHttpServer())
                .patch(path)
                .send(patchBoardDto)
                .expect(ResCode.Unauthorized)
        })

        it('PATCH 200 - OK', () => {
            const patchBoardDto: PatchBoardDto = {
                name: '새로운 테스트 보드2',
            }
            return request(app.getHttpServer())
                .patch(path)
                .set('Authorization', `Bearer ${access_token}`)
                .send(patchBoardDto)
                .expect(ResCode.OK)
        })

        it('GET 200 - OK PATCH confirm', async () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.name).toEqual('새로운 테스트 보드2')
                })
        })

        it('DELETE 202 - Deleted', () => {
            return request(app.getHttpServer())
                .delete(path)
                .expect(ResCode.Deleted)
        })
    })
    afterAll(async () => {
        await getConnection().synchronize(true)
        await app.close()
    })
})
