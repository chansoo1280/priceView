import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import { ResCode } from 'src/common/handleResult'
import { EmailConstants } from 'src/common/constants'
import { encryptWithAES256 } from 'src/common/crypto'
import { getConnection } from 'typeorm'
import { PatchUserDto } from 'src/user/dto/patch-user.dto'
import { getApp, loginSetting } from './testFn'

describe('UserController (e2e)', () => {
    let app: INestApplication
    beforeAll(async () => {
        app = await getApp()
        await app.init()
    })

    describe('/user', () => {
        const name = 'Ulla'
        const email = 'Blue@example.com'
        const pw = '1234asdf'

        const path = '/user'
        it('GET 200 - OK', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.length).toEqual(0)
                })
        })
        it('POST 400 - BadRequest 이메일 오류', () => {
            const createUserDto: CreateUserDto = {
                name: name,
                email: 'Blue',
                pw: pw,
            }

            return request(app.getHttpServer())
                .post(path)
                .send(createUserDto)
                .expect(ResCode.BadRequest)
        })
        it('POST 400 - BadRequest 비밀번호 오류', async () => {
            const createUserDto: CreateUserDto = {
                name: name,
                email: await encryptWithAES256(
                    email + '-' + EmailConstants.secretEmail,
                ),
                pw: '1234asd', //최소 8글자 영어, 숫자 조합
            }

            return request(app.getHttpServer())
                .post(path)
                .send(createUserDto)
                .expect(ResCode.BadRequest)
        })
        it('POST 201 - Created', async () => {
            const createUserDto: CreateUserDto = {
                name: name,
                email: await encryptWithAES256(
                    email + '-' + EmailConstants.secretEmail,
                ),
                pw: pw, //최소 8글자 영어, 숫자 조합
            }

            return request(app.getHttpServer())
                .post(path)
                .send(createUserDto)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.identifiers[0].user_uuid).toBeDefined()
                })
        })
        it('POST 400 - BadRequest 회원가입 중복된 이메일', async () => {
            const createUserDto: CreateUserDto = {
                name: 'Ulla2',
                email: await encryptWithAES256(
                    email + '-' + EmailConstants.secretEmail,
                ),
                pw: pw, //최소 8글자 영어, 숫자 조합
            }

            return request(app.getHttpServer())
                .post(path)
                .send(createUserDto)
                .expect(ResCode.BadRequest)
        })
        it('DELETE 202 - Deleted', () => {
            return request(app.getHttpServer())
                .delete(path)
                .expect(ResCode.Deleted)
        })
    })

    describe('/user/:user_uuid', () => {
        const name = 'Ulla'
        const email = 'Blue@example.com'
        const pw = '1234asdf'

        it('GET 204 - NoContent', () => {
            return request(app.getHttpServer())
                .get('/user/99999999-0795-EB11-BEA2-C809A897800A')
                .expect(ResCode.NoContent)
        })
        let path = ''
        let user_uuid = ''
        let access_token: string | null = null
        it('user setting', async () => {
            const [res_user_uuid, res_access_token] = await loginSetting(
                {
                    name: name,
                    email: email,
                    pw: pw, //최소 8글자 영어, 숫자 조합
                },
                app,
            )
            user_uuid = res_user_uuid
            access_token = res_access_token
            path = '/user/' + user_uuid
        })

        it('GET 200 - OK', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.email).toEqual(email)
                })
        })

        it('POST 404 - NotFound', () => {
            return request(app.getHttpServer())
                .post(path)
                .expect(ResCode.NotFound)
        })

        it('PATCH 401 - Unauthorized', () => {
            let patchUserDto: PatchUserDto = {
                name: 'Ulla2',
            }
            return request(app.getHttpServer())
                .patch(path)
                .send(patchUserDto)
                .expect(ResCode.Unauthorized)
        })

        it('PATCH 200 - OK', () => {
            let patchUserDto: PatchUserDto = {
                name: 'Ulla2',
            }
            return request(app.getHttpServer())
                .patch(path)
                .set('Authorization', `Bearer ${access_token}`)
                .send(patchUserDto)
                .expect(ResCode.OK)
        })

        it('GET 200 - OK PATCH confirm', () => {
            return request(app.getHttpServer())
                .get(path)
                .expect(ResCode.OK)
                .then((res) => {
                    expect(res.body.name).toEqual('Ulla2')
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
