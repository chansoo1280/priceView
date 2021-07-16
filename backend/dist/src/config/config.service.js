"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env.NODE_ENV === 'test'
            ? this.env[key + '_TEST']
            : this.env[key];
        if ((!value && throwOnMissing) || value === undefined) {
            throw new Error(`config error - missing env.${key} =  ${JSON.stringify(this.env)}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    isProduction() {
        const mode = this.env['MODE'];
        return mode != 'DEV';
    }
    getTypeOrmConfig() {
        return {
            type: 'mssql',
            host: this.getValue('MSSQL_HOST'),
            port: parseInt(this.getValue('MSSQL_PORT')),
            username: this.getValue('MSSQL_USER'),
            password: this.getValue('MSSQL_PASSWORD'),
            database: this.getValue('MSSQL_DATABASE'),
            entities: JSON.parse(this.getValue('MSSQL_ENTITIES')),
            logging: false,
            synchronize: true,
            options: {
                encrypt: false,
                enableArithAbort: true
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
exports.configService = configService;
//# sourceMappingURL=config.service.js.map