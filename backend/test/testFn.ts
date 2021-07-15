import { INestApplication, ValidationPipe } from '@nestjs/common'
import { LoginAuthDto } from 'src/auth/dto/login-auth.dto'
import { Board } from 'src/board/board.entity'
import { CreateBoardDto } from 'src/board/dto/create-board.dto'
import { AwardStepCode, BoardTypeCode, InviteStateCode } from 'src/common/codeEnum'
import { EmailConstants } from 'src/common/constants'
import { encryptWithAES256 } from 'src/common/crypto'
import { ResCode } from 'src/common/handleResult'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from 'src/app.module'
import { PatchInviteDto } from 'src/user/invite/dto/patch-invite.dto'
import { User } from 'src/user/user.entity'
import { CreateStampingDto } from 'src/board/member/stamping/dto/create-stamping.dto'
import { Member } from 'src/board/member/member.entity'
import { CreateAwardDto } from 'src/board/award/dto/create-award.dto'

export const getApp = async function () {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
    }).compile()
    let app = moduleFixture.createNestApplication()
    
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // validation을 위한 decorator가 붙어있지 않은 속성들은 제거
            forbidNonWhitelisted: true, // whitelist 설정을 켜서 걸러질 속성이 있다면 아예 요청 자체를 막도록 (400 에러)
            transform: true, // 요청에서 넘어온 자료들의 형변환
        }),
    )
    return app
}

export const user_info1: CreateUserDto = {
    name: 'Ulla',
    email: 'Blue@example.com',
    pw: '1234asdf',
}
export const user_info2: CreateUserDto = {
    name: 'Minju',
    email: 'White@example.com',
    pw: '823asg65sd',
}

export const loginSetting = async function (
    createUserDto: CreateUserDto,
    app: INestApplication,
) {
    const user_info: CreateUserDto = {
        ...createUserDto,
        email: await encryptWithAES256(
            createUserDto.email + '-' + EmailConstants.secretEmail,
        ),
    }

    const resultOfUserCreate = await request(app.getHttpServer())
        .post('/user')
        .send(user_info)
        .expect(ResCode.OK)

    let loginAuthDto: LoginAuthDto = {
        email: createUserDto.email,
        pw: createUserDto.pw,
    }
    const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send(loginAuthDto)
        .expect(ResCode.OK)
    return [
        resultOfUserCreate.body.identifiers[0].user_uuid,
        response.body.access_token,
    ]
}

export const board_info: CreateBoardDto = {
    // owner -> user2
    name: '새로운 테스트 보드',
    length: 7,
    type: BoardTypeCode.zigzag,
    color_bg: '#000000',
    mgr_join: true,
}

export const boardSetting = async function (
    createBoardDto: CreateBoardDto,
    access_token: string | null,
    app: INestApplication,
) {
    const response = await request(app.getHttpServer())
        .post('/board')
        .set('Authorization', `Bearer ${access_token}`)
        .send(createBoardDto)
        .expect(ResCode.OK)
    return response.body.identifiers[0].board_seq
}

export const inviteSetting = async function (
    board_seq: Board['board_seq'],
    user_uuid: User['user_uuid'],
    access_token: string | null,
    app: INestApplication,
) {
    const createInviteDto = {
        board_seq: board_seq,
    }
    const response = await request(app.getHttpServer())
        .post('/user/' + user_uuid + '/invite')
        .set('Authorization', `Bearer ${access_token}`)
        .send(createInviteDto)
        .expect(ResCode.OK)
    return response.body.identifiers[0].invite_seq
}

export const memberSetting = async function (
    board_seq: Board['board_seq'],
    user_uuid: User['user_uuid'],
    access_token1: string | null,
    access_token2: string | null,
    app: INestApplication,
) {
    const createInviteDto = {
        board_seq: board_seq,
    }
    const response_invite = await request(app.getHttpServer())
        .post('/user/' + user_uuid + '/invite')
        .set('Authorization', `Bearer ${access_token2}`)
        .send(createInviteDto)
        .expect(ResCode.OK)
    const invite_seq = response_invite.body.identifiers[0].invite_seq

    let patchInviteDto: PatchInviteDto = {
        state: InviteStateCode.resolve, // 403
    }
    const response = await request(app.getHttpServer())
        .patch('/user/' + user_uuid + '/invite/' + invite_seq)
        .set('Authorization', `Bearer ${access_token1}`) // user1
        .send(patchInviteDto)
        .expect(ResCode.OK)
    return response.body.identifiers[0].member_seq
}

export const stampingSetting = async function (
    board_seq: Board['board_seq'],
    member_seq: Member['member_seq'],
    access_token: string | null,
    app: INestApplication,
) {
    const createStampingDto: CreateStampingDto = {
        text: '성공!',
        idx: 0,
    }
    // const response = await request(app.getHttpServer())
    //     .post('/board/' + board_seq + '/member/' + member_seq + '/stamping')
    //     .set('Authorization', `Bearer ${access_token}`) // 관리자 or 본인
    //     .send(createStampingDto)
    //     .expect(ResCode.OK)
    const filePath = `${__dirname}/images/testImage.jpg`;
    const response = await request(app.getHttpServer())
        .post('/board/' + board_seq + '/member/' + member_seq + '/stamping')
        .set('Authorization', `Bearer ${access_token}`) // 관리자 or 본인
        .set('Content-Type', 'multipart/form-data')
        .attach('file', filePath)
        .field('text', createStampingDto.text)
        .field('idx', createStampingDto.idx)
        .expect(ResCode.OK)
    return response.body.identifiers[0].stamping_seq
}

export const awardSetting = async function (
    board_seq: Board['board_seq'],
    access_token: string | null,
    app: INestApplication,
) {

    const createAwardDto: CreateAwardDto = {
        type: AwardStepCode.middle,
        title: '중간 보상!',
        idx: 5,
    }
    const response = await request(app.getHttpServer())
        .post('/board/' + board_seq + '/award')
        .set('Authorization', `Bearer ${access_token}`) // 관리자
        .send(createAwardDto)
        .expect(ResCode.OK)

    return response.body.identifiers[0].award_seq
}