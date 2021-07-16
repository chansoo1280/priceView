"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const price_module_1 = require("../price/price.module");
const price_repository_1 = require("../price/price.repository");
const price_service_1 = require("../price/price.service");
const count_controller_1 = require("./count.controller");
const count_repository_1 = require("./count.repository");
const count_service_1 = require("./count.service");
let CountModule = class CountModule {
};
CountModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([count_repository_1.CountRepository, price_repository_1.PriceRepository]), common_1.HttpModule],
        controllers: [count_controller_1.CountController],
        providers: [count_service_1.CountService, price_service_1.PriceService]
    })
], CountModule);
exports.CountModule = CountModule;
//# sourceMappingURL=count.module.js.map