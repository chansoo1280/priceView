import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import path from "path"
import Dotenv from "dotenv"

const envPath: string = (function () {
    if (process.env.pm_cwd) {
        return path.resolve(process.env.pm_cwd, ".env")
    }
    return path.resolve(process.cwd(), ".env")
})()
Dotenv.config({ path: envPath })

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) {}

    private getValue(key: string, throwOnMissing = true): string {
        const value =
            this.env[
                // eslint-disable-next-line no-nested-ternary
                this.env.NODE_ENV === "test" ? `${key}_TEST` : this.env.NODE_ENV === "development" ? `${key}_DEV` : key
            ] || ""

        if ((!value && throwOnMissing) || value === undefined) {
            throw new Error(`config error - missing env.${key} =  ${JSON.stringify(this.env)}`)
        }
        return value
    }

    public ensureValues(keys: string[]) {
        keys.forEach((k) => this.getValue(k, true))
        return this
    }

    public isProduction() {
        const mode = this.env.MODE
        return mode !== "DEV"
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: "mssql",
            host: this.getValue("MSSQL_HOST"),
            port: Number(this.getValue("MSSQL_PORT")),
            username: this.getValue("MSSQL_USER"),
            password: this.getValue("MSSQL_PASSWORD"),
            database: this.getValue("MSSQL_DATABASE"),

            entities: JSON.parse(this.getValue("MSSQL_ENTITIES")),

            logging: false, // (this.env.NODE_ENV === 'test'),
            synchronize: false, // (this.env.NODE_ENV === 'test'),
            options: {
                encrypt: false,
                enableArithAbort: true,
            },
            requestTimeout: 0, // for timeout setting
            connectionTimeout: 0, // for timeout setting
            ssl: this.isProduction(),
        }
    }
}

const configService = new ConfigService(process.env).ensureValues([
    "MSSQL_HOST",
    "MSSQL_PORT",
    "MSSQL_USER",
    "MSSQL_PASSWORD",
    "MSSQL_DATABASE",
])
export const { SECRET } = process.env
export { configService }
