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
exports.Price = void 0;
const typeorm_1 = require("typeorm");
let Price = class Price extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Price.prototype, "price_seq", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Price.prototype, "P_SEQ", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Price.prototype, "M_SEQ", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "M_NAME", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Price.prototype, "A_SEQ", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "A_NAME", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "A_UNIT", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "A_PRICE", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "P_YEAR_MONTH", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "ADD_COL", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "P_DATE", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "M_TYPE_CODE", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "M_TYPE_NAME", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "M_GU_CODE", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Price.prototype, "M_GU_NAME", void 0);
Price = __decorate([
    typeorm_1.Entity()
], Price);
exports.Price = Price;
//# sourceMappingURL=price.entity.js.map