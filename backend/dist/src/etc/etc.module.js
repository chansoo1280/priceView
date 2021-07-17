"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtcModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const etc_controller_1 = require("./etc.controller");
const etc_repository_1 = require("./etc.repository");
const etc_service_1 = require("./etc.service");
let EtcModule = class EtcModule {
};
EtcModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([etc_repository_1.EtcRepository])],
        controllers: [etc_controller_1.EtcController],
        providers: [etc_service_1.EtcService],
    })
], EtcModule);
exports.EtcModule = EtcModule;
//# sourceMappingURL=etc.module.js.map