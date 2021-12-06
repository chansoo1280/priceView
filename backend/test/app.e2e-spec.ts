
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ResCode } from 'src/common/handleResult';
import { getConnection } from 'typeorm';
import { getApp } from './testFn';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await getApp();
    await app.init();
  });

  describe('/', () => {
    it('GET - OK', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(ResCode.OK)
        .expect('Hello World!2');
    });
    it('POST - NotFound', () => {
      return request(app.getHttpServer())
        .post('/')
        .expect(ResCode.NotFound)
        .then((res) => {
          expect(res.body.message).toEqual('Cannot POST /');
        });
    });
  });

  afterAll(async () => {
    await getConnection().synchronize(true);
    await app.close();
  });
});
