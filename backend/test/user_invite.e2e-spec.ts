import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { ResCode } from 'src/common/handleResult'
import { getConnection } from 'typeorm'
import { InviteStateCode } from 'src/common/codeEnum'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import {
    boardSetting,
    board_info,
    getApp,
    inviteSetting,
    loginSetting,
    user_info1,
    user_info2,
} from './testFn'
import { PatchInviteDto } from 'src/user/invite/dto/patch-invite.dto'

describe('InviteController (e2e)', () => {
    let app: INestApplication
    beforeAll(async () => {
        app = await getApp()
        await app.init()
    })

    let access_token1: string | null = null
    let user_uuid1: string = ''
    let access_token2: string | null = null
    let user_uuid2: string = ''
    let path = ''

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

        path = '/user/' + user_uuid1 + '/invite'
    })

    let board_seq: number = 0
    it('board setting', async () => {
        board_seq = await boardSetting(board_info, access_token2, app)
    })

    describe('/user/:email/invite', () => {
        it('GET 200 - OK user1', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .expect([])
        })

        it('POST 401 - Unauthorized 로그인 안함', () => {
            const createInviteDto = {
                board_seq: board_seq,
            }

            return request(app.getHttpServer())
                .post(path)
                .send(createInviteDto)
                .expect(ResCode.Unauthorized)
        })
        it('POST 400 - BadRequest 이상한 구성', () => {
            const createInviteDto = {
                board_seqq: board_seq,
            }
            return request(app.getHttpServer())
                .post(path)
                .set('Authorization', `Bearer ${access_token2}`)
                .send(createInviteDto)
                .expect(ResCode.BadRequest)
        })
        it('POST 201 - Created user2 -> user1', () => {
            const createInviteDto = {
                board_seq: board_seq,
            }
            return request(app.getHttpServer())
                .post(path)
                .set('Authorization', `Bearer ${access_token2}`)
                .send(createInviteDto)
                .expect(ResCode.OK)
        })

        it('POST 400 - BadRequest 중복 초대', () => {
            const createInviteDto = {
                board_seq: board_seq,
            }
            return request(app.getHttpServer())
                .post(path)
                .set('Authorization', `Bearer ${access_token2}`)
                .send(createInviteDto)
                .expect(ResCode.BadRequest)
        })

        it('create confirm', () => {
            return request(app.getHttpServer())
                .get(path)
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

    describe('/user/:email/invite/:invite_seq', () => {
        it('GET 204 - NoContent', () => {
            return request(app.getHttpServer())
                .get(path + '/999')
                .expect(ResCode.NoContent)
        })
        let invite_seq = 0
        let pathOfInvite = ''
        it('invite setting', async () => {
            invite_seq = await inviteSetting(
                board_seq,
                user_uuid1,
                access_token2,
                app,
            )
            pathOfInvite = path + '/' + invite_seq
        })

        it('GET 200 - OK', async () => {
            return request(app.getHttpServer())
                .get(pathOfInvite)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.board.name).toEqual(board_info.name)
                })
        })

        it('POST 404 - NotFound', () => {
            return request(app.getHttpServer())
                .post(pathOfInvite)
                .expect(ResCode.NotFound)
        })

        it('PATCH 401 - Unauthorized', () => {
            let patchInviteDto: PatchInviteDto = {
                state: InviteStateCode.resolve, // resolve
            }
            return request(app.getHttpServer())
                .patch(pathOfInvite)
                .send(patchInviteDto)
                .expect(ResCode.Unauthorized)
        })

        it('PATCH 200 - OK', () => {
            let patchInviteDto: PatchInviteDto = {
                state: InviteStateCode.resolve, // 403
            }
            return request(app.getHttpServer())
                .patch(pathOfInvite)
                .set('Authorization', `Bearer ${access_token1}`) // user1
                .send(patchInviteDto)
                .expect(ResCode.OK)
        })

        it('patch confirm', () => {
            return request(app.getHttpServer())
                .get(pathOfInvite)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.state).toEqual(InviteStateCode.resolve)
                })
        })

        it('patch confirm - member', () => {
            return request(app.getHttpServer())
                .get('/board/' + board_seq + '/member')
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(2)
                })
        })

        it('patch confirm - log', () => {
            return request(app.getHttpServer())
                .get('/board/' + board_seq + '/log')
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(3)
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
