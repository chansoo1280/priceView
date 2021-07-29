import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '.env') });

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value =
      this.env.NODE_ENV === 'test' ? this.env[key + '_TEST'] : this.env[key];

    if ((!value && throwOnMissing) || value === undefined) {
      throw new Error(
        `config error - missing env.${key} =  ${JSON.stringify(this.env)}`,
      );
    }
    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public isProduction() {
    const mode = this.env['MODE'];
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mssql',
      host: this.getValue('MSSQL_HOST'),
      port: parseInt(this.getValue('MSSQL_PORT')),
      username: this.getValue('MSSQL_USER'),
      password: this.getValue('MSSQL_PASSWORD'),
      database: this.getValue('MSSQL_DATABASE'),

      entities: JSON.parse(this.getValue('MSSQL_ENTITIES')),

      logging: false, // (this.env.NODE_ENV === 'test'),
      synchronize: true, //(this.env.NODE_ENV === 'test'),
      options: {
        encrypt: false,
        enableArithAbort: true,
      },
      ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'MSSQL_HOST',
  'MSSQL_PORT',
  'MSSQL_USER',
  'MSSQL_PASSWORD',
  'MSSQL_DATABASE',
]);

export { configService };
