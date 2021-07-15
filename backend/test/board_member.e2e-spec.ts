import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { ResCode } from 'src/common/handleResult'
import { getConnection } from 'typeorm'
import { InviteStateCode, MemberStateCode } from 'src/common/codeEnum'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import {
    boardSetting,
    board_info,
    getApp,
    inviteSetting,
    loginSetting,
    memberSetting,
    user_info1,
    user_info2,
} from './testFn'
import { PatchInviteDto } from 'src/user/invite/dto/patch-invite.dto'
import { PatchMemberDto } from 'src/board/member/dto/patch-member.dto'

describe('MemberController (e2e)', () => {
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
        path = '/board/' + board_seq + '/member'
    })

    describe('/board/:board_seq/member', () => {
        it('GET 200 - OK', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(1) //관리자
                })
        })

        it('POST 404 - NotFound', () => {
            return request(app.getHttpServer())
                .post(path)
                .expect(ResCode.NotFound)
        })

        let invite_seq = 0
        it('invite setting', async () => {
            invite_seq = await inviteSetting(
                board_seq,
                user_uuid1,
                access_token2,
                app,
            )
        })

        it('create member', () => {
            //생성은 초대를 이용해서
            let patchInviteDto: PatchInviteDto = {
                state: InviteStateCode.resolve, // 403
            }
            return request(app.getHttpServer())
                .patch('/user/' + user_uuid1 + '/invite/' + invite_seq)
                .set('Authorization', `Bearer ${access_token1}`) // user1
                .send(patchInviteDto)
                .expect(ResCode.OK)
        })

        it('create confirm', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(2)
                })
        })

        it('DELETE 202 - Deleted - invite', () => {
            return request(app.getHttpServer())
                .delete(path)
                .expect(ResCode.Deleted)
        })

        it('DELETE 202 - Deleted', () => {
            return request(app.getHttpServer())
                .delete('/user/' + user_uuid1 + '/invite')
                .expect(ResCode.Deleted)
        })
    })
    describe('/board/:board_seq/member/:member_seq', () => {
        it('GET 204 - NoContent', () => {
            return request(app.getHttpServer())
                .get(path + '/999')
                .expect(ResCode.NoContent)
        })

        let member_seq = 0
        let pathOfMember = ''
        it('member setting', async () => {
            member_seq = await memberSetting(
                board_seq,
                user_uuid1,
                access_token1,
                access_token2,
                app,
            )
            pathOfMember = path + '/' + member_seq
        })

        it('create confirm', () => {
            return request(app.getHttpServer()).get(pathOfMember).expect(ResCode.OK)
        })

        it('POST 404 - NotFound', () => {
            return request(app.getHttpServer())
                .post(pathOfMember)
                .expect(ResCode.NotFound)
        })

        it('PATCH 200 - OK', () => {
            // completed -> confirm 다 완료되어야함
            return request(app.getHttpServer())
                .patch(pathOfMember)
                .set('Authorization', `Bearer ${access_token1}`) // 멤버
                .send()
                .expect(ResCode.BadRequest)
        })

        it('DELETE 202 - Deleted', () => {
            return request(app.getHttpServer())
                .delete(pathOfMember)
                .expect(ResCode.Deleted)
        })
    })

    afterAll(async () => {
        await getConnection().synchronize(true)
        await app.close()
    })
})
