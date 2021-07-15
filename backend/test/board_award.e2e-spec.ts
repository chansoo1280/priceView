import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { ResCode } from 'src/common/handleResult'
import { getConnection } from 'typeorm'
import { AwardStepCode, StampingStateCode } from 'src/common/codeEnum'
import {
    awardSetting,
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
import { CreateAwardDto } from 'src/board/award/dto/create-award.dto'
import { PatchAwardDto } from 'src/board/award/dto/patch-award.dto'

describe('AwardController (e2e)', () => {
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
        path = '/board/' + board_seq + '/award'
    })

    describe('/board/:board_seq/award', () => {
        it('GET 200 - OK', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(0)
                })
        })

        it('POST 401 - Unauthorized', () => {
            const createAwardDto: CreateAwardDto = {
                type: AwardStepCode.middle,
                title: '중간 보상!',
                idx: 5,
            }
            return request(app.getHttpServer())
                .post(path)
                .send(createAwardDto)
                .expect(ResCode.Unauthorized)
        })

        it('POST 400 - BadRequest', () => {
            const createAwardDto: CreateAwardDto = {
                type: AwardStepCode.middle,
                title: '중간 보상!',
                idx: 9,//보드 길이를 넘어선 idx
            }
            return request(app.getHttpServer())
                .post(path)
                .set('Authorization', `Bearer ${access_token2}`) // 관리자
                .send(createAwardDto)
                .expect(ResCode.BadRequest)
        })

        it('POST 201 - Created', () => {
            const createAwardDto: CreateAwardDto = {
                type: AwardStepCode.middle,
                title: '중간 보상!',
                idx: 5,
            }
            return request(app.getHttpServer())
                .post(path)
                .set('Authorization', `Bearer ${access_token2}`) // 관리자
                .send(createAwardDto)
                .expect(ResCode.OK)
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
    describe('/board/:board_seq/award/:award_seq', () => {
        it('GET 204 - NoContent', () => {
            return request(app.getHttpServer())
                .get(path + '/999')
                .expect(ResCode.NoContent)
        })

        let award_seq = 0
        let pathOfAward = '';
        it('award setting', async () => {
            award_seq = await awardSetting(
                board_seq,
                access_token2,
                app,
            )
            pathOfAward = path + '/' + award_seq
        })

        it('create confirm', () => {
            return request(app.getHttpServer()).get(pathOfAward).expect(ResCode.OK)
        })

        it('POST 404 - NotFound', () => {
            return request(app.getHttpServer())
                .post(pathOfAward)
                .expect(ResCode.NotFound)
        })

        it('PATCH 401 - Unauthorized', () => {
            let patchAwardDto: PatchAwardDto = {
                type: AwardStepCode.upper, // 큰 보상!
            }
            return request(app.getHttpServer())
                .patch(pathOfAward)
                .send(patchAwardDto)
                .expect(ResCode.Unauthorized)
        })

        it('PATCH 200 - OK', () => {
            let patchAwardDto: PatchAwardDto = {
                type: AwardStepCode.upper, // 큰 보상!
                title: '바뀐 타이틀'
            }
            return request(app.getHttpServer())
                .patch(pathOfAward)
                .set('Authorization', `Bearer ${access_token2}`) // 관리자
                .send(patchAwardDto)
                .expect(ResCode.OK)
        })

        it('patch confirm', () => {
            return request(app.getHttpServer())
                .get(pathOfAward)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.type).toEqual(AwardStepCode.upper)
                })
        })

        it('DELETE 202 - Deleted', () => {
            return request(app.getHttpServer())
                .delete(pathOfAward)
                .expect(ResCode.Deleted)
        })
    })

    afterAll(async () => {
        await getConnection().synchronize(true)
        await app.close()
    })
})
