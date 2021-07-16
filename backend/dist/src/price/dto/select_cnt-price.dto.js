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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectCntPriceDto = void 0;
const class_validator_1 = require("class-validator");
const count_entity_1 = require("../../count/count.entity");
class SelectCntPriceDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], SelectCntPriceDto.prototype, "A_NAME", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], SelectCntPriceDto.prototype, "A_UNIT", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], SelectCntPriceDto.prototype, "P_YEAR_MONTH", void 0);
exports.SelectCntPriceDto = SelectCntPriceDto;
//# sourceMappingURL=select_cnt-price.dto.js.map