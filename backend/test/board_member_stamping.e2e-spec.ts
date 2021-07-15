import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { ResCode } from 'src/common/handleResult'
import { getConnection } from 'typeorm'
import { StampingStateCode } from 'src/common/codeEnum'
import {
    boardSetting,
    board_info,
    getApp,
    loginSetting,
    memberSetting,
    stampingSetting,
    user_info1,
    user_info2,
} from './testFn'
import { CreateStampingDto } from 'src/board/member/stamping/dto/create-stamping.dto'
import { PatchStampingDto } from 'src/board/member/stamping/dto/patch-stamping.dto'

describe('StampingController (e2e)', () => {
    let app: INestApplication
    beforeAll(async () => {
        app = await getApp()
        await app.init()
    })

    let access_token1: string | null = null
    let user_uuid1: string = ''

    let access_token2: string | null = null
    let user_uuid2: string = ''

    it('user setting', async () => {
        const [res_user_uuid1, res_access_token1] = await loginSetting(
            user_info1,
            app,
        )
        access_token1 = res_access_token1
        user_uuid1 = res_user_uuid1
        const [res_user_uuid2, res_access_token2] = await loginSetting(
            user_info2,
            app,
        )
        access_token2 = res_access_token2
        user_uuid2 = res_user_uuid2
    })

    let board_seq: number = 0
    let path = ''
    it('board setting', async () => {
        board_seq = await boardSetting(board_info, access_token2, app)
        path = '/board/' + board_seq
    })

    let member_seq = 0
    it('member setting', async () => {
        member_seq = await memberSetting(
            board_seq,
            user_uuid1,
            access_token1,
            access_token2,
            app,
        )
        path = path + '/member/' + member_seq + '/stamping'
    })

    describe('/board/:board_seq/member/:member_seq/stamping', () => {
        it('GET 200 - OK', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(0)
                })
        })

        it('POST 201 - Created', () => {
            const filePath = `${__dirname}/images/testImage.jpg`;
            return request(app.getHttpServer())
                .post(path)
                .set('Authorization', `Bearer ${access_token1}`) // 관리자 or 본인
                .set('Content-Type', 'multipart/form-data')
                .attach('file', filePath)
                .field('text', 'asd0')
                .field('idx', 0)
                .expect(ResCode.OK)
        })

        it('log confirm', () => {
            return request(app.getHttpServer())
                .get('/board/' + board_seq + '/log')
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(4)
                })
        })
        it('DELETE 202 - Deleted', () => {
            return request(app.getHttpServer())
                .delete(path)
                .expect(ResCode.Deleted)
        })
    })
    describe('/board/:board_seq/member/:member_seq/stamping/:stamping_seq', () => {
        it('GET 204 - NoContent', () => {
            return request(app.getHttpServer())
                .get(path + '/999')
                .expect(ResCode.NoContent)
        })

        let stamping_seq = 0
        let pathOfStamping = '';
        it('stamping setting', async () => {
            stamping_seq = await stampingSetting(
                board_seq,
                member_seq,
                access_token1,
                app,
            )
            pathOfStamping = path + '/' + stamping_seq
        })

        it('create confirm', () => {
            return request(app.getHttpServer()).get(pathOfStamping).expect(ResCode.OK)
                .then((res) => {
                })
        })

        it('GET 200 - OK image', () => {
            return request(app.getHttpServer())
                .get(pathOfStamping + '/image')
                .expect(ResCode.OK)
                .then((res) => {
                    // console.log(res.body)
                })
        })

        it('POST 404 - NotFound', () => {
            return request(app.getHttpServer())
                .post(pathOfStamping)
                .expect(ResCode.NotFound)
        })

        it('PATCH 401 - Unauthorized', () => {
            const patchStampingDto: PatchStampingDto = {
                state: StampingStateCode.resolve
            }
            return request(app.getHttpServer())
                .patch(pathOfStamping)
                .send(patchStampingDto)
                .expect(ResCode.Unauthorized)
        })

        it('PATCH 200 - OK', () => {
            const patchStampingDto: PatchStampingDto = {
                state: StampingStateCode.resolve // 달성 승인
            }
            return request(app.getHttpServer())
                .patch(pathOfStamping)
                .set('Authorization', `Bearer ${access_token2}`) // 관리자
                .send(patchStampingDto)
                .expect(ResCode.OK)
        })

        it('GET 200 - OK PATCH confirm', async () => {
            return request(app.getHttpServer())
                .get(pathOfStamping)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.state).toEqual(StampingStateCode.resolve)
                })
        })

        it('PATCH 200 - OK PATCH confirm', async () => {
            return request(app.getHttpServer())
                .patch(path)
                .set('Authorization', `Bearer ${access_token1}`) // 멤버가 도장 확인
                .send()
                .expect(ResCode.OK)
        })

        it('PATCH 200 - OK PATCH completed', () => {
            const patchStampingDto: PatchStampingDto = {
                state: StampingStateCode.completed // 보상 수령 완료
            }
            return request(app.getHttpServer())
                .patch(pathOfStamping)
                .set('Authorization', `Bearer ${access_token2}`) // 관리자가 보상 수령 완료
                .send(patchStampingDto)
                .expect(ResCode.OK)
        })

        it('DELETE 202 - Deleted', () => {
            return request(app.getHttpServer())
                .delete(pathOfStamping)
                .expect(ResCode.Deleted)
        })
    })

    afterAll(async () => {
        await getConnection().synchronize(true)
        await app.close()
    })
})
