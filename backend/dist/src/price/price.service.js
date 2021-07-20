"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const price_entity_1 = require("./price.entity");
const price_repository_1 = require("./price.repository");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const schedule_1 = require("@nestjs/schedule");
const constants_1 = require("../common/constants");
let PriceService = class PriceService extends query_typeorm_1.TypeOrmQueryService {
    constructor(priceRepository, httpService) {
        super(priceRepository, { useSoftDelete: true });
        this.priceRepository = priceRepository;
        this.httpService = httpService;
    }
    async handleInterval() {
        const myHttp = 'http://3.37.6.110';
        const date = new Date();
        console.log('data update - ' + date);
        const curDate_1 = new Date(date.getFullYear(), date.getMonth() - 1, 2);
        const curDate_2 = new Date(date.getFullYear(), date.getMonth(), 2);
        const YEAR = String(curDate_1.getFullYear());
        const MONTH = String(curDate_1.getMonth() + 1);
        const P_YEAR_MONTH = YEAR + '-' + (MONTH.length === 1 ? '0' + MONTH : MONTH);
        const YEAR2 = String(curDate_2.getFullYear());
        const MONTH2 = String(curDate_2.getMonth() + 1);
        const P_YEAR_MONTH2 = YEAR2 + '-' + (MONTH2.length === 1 ? '0' + MONTH2 : MONTH2);
        const config = {
            headers: {
                secret: constants_1.SECRET,
            },
        };
        await this.httpService
            .get(`${myHttp}/api/price?P_YEAR_MONTH=${P_YEAR_MONTH}`, config)
            .pipe(operators_1.map((response) => {
            console.log(response);
            return response.data;
        }))
            .toPromise();
        await this.httpService
            .get(`${myHttp}/api/price?P_YEAR_MONTH=${P_YEAR_MONTH2}`, config)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
        const merge_lsit = [
            ['동태', 13, '동태', 288],
            ['고등어', 304, '고등어', 13],
            ['닭고기', 320, '달걀(왕란)', 134],
            ['', 18, '닭고기', 18],
            ['돼지고기', 18, '돼지고기', 285],
            ['돼지고기', 171, '돼지고기', 285],
            ['', 171, '달걀(10개)', 171],
            ['조기', 253, '오징어', 253],
            ['', 278, '쇠고기', 278],
            ['', 285, '돼지고기', 285],
            ['쇠고기', 285, '쇠고기', 278],
            ['달걀(30개)', 288, '동태', 288],
            ['달걀(10개)', 303, '조기', 303],
            ['사과(부사),중급(대)', 237, '사과(부사),중급(대)', 244],
            ['달걀(왕란)', 134, '달걀(왕란)', 181],
            ['달걀', 17, '달걀(10개)', 171],
            ['배추(중간)', 175, '배추(중간)', 271],
            ['무(세척무)', 282, '무(세척무)', 133],
        ];
        for (let i = 0; i < merge_lsit.length; i++) {
            const info = merge_lsit[i];
            console.log('merge_lsit' + i);
            await this.priceRepository
                .createQueryBuilder()
                .update(price_entity_1.Price)
                .set({
                A_SEQ: Number(info[3]),
                A_NAME: String(info[2]),
            })
                .where('price.A_SEQ = :A_SEQ', { A_SEQ: info[1] })
                .andWhere('price.A_NAME = :A_NAME', { A_NAME: info[0] })
                .execute();
        }
        this.httpService
            .get(`${myHttp}/api/count?P_YEAR_MONTH=${P_YEAR_MONTH}`, config)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
        this.httpService
            .get(`${myHttp}/api/count?P_YEAR_MONTH=${P_YEAR_MONTH2}`, config)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
    }
    async getCnt({ name, A_UNIT, P_YEAR_MONTH }) {
        const result = await this.priceRepository
            .createQueryBuilder('price')
            .select()
            .where('price.A_NAME = :name', { name })
            .andWhere(new typeorm_2.Brackets((subQy) => {
            A_UNIT.map((unit, idx) => {
                return subQy.orWhere('price.A_UNIT LIKE :unit_' + idx, {
                    ['unit_' + idx]: `%${unit}%`,
                });
            });
        }))
            .andWhere('price.P_YEAR_MONTH = :P_YEAR_MONTH', { P_YEAR_MONTH })
            .getMany();
        return result;
    }
    async getLen(P_YEAR_MONTH) {
        return this.httpService
            .get('http://openapi.seoul.go.kr:8088/5766576b4e63686136305a414e6345/json/ListNecessariesPricesService/1/1/%20/%20/' +
            P_YEAR_MONTH)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
    }
    async findAll(P_YEAR_MONTH, page) {
        return this.httpService
            .get('http://openapi.seoul.go.kr:8088/5766576b4e63686136305a414e6345/json/ListNecessariesPricesService/' +
            String(page * 1000 + 1) +
            '/' +
            String((page + 1) * 1000) +
            '/%20/%20/' +
            P_YEAR_MONTH)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
    }
    async createPrice(list) {
        const result = await this.priceRepository
            .createQueryBuilder()
            .insert()
            .into(price_entity_1.Price)
            .values(list)
            .orUpdate({ conflict_target: ['P_SEQ'], overwrite: [] })
            .execute()
            .catch((err) => {
            console.log(err);
            return err;
        });
        return result;
    }
};
__decorate([
    schedule_1.Interval('interval', 1000 * 60 * 60 * 24 * 14),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PriceService.prototype, "handleInterval", null);
PriceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(price_entity_1.Price)),
    __metadata("design:paramtypes", [price_repository_1.PriceRepository,
        common_1.HttpService])
], PriceService);
exports.PriceService = PriceService;
//# sourceMappingURL=price.service.js.map