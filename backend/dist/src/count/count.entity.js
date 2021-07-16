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
exports.Count = void 0;
const typeorm_1 = require("typeorm");
let Count = class Count extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Count.prototype, "count_seq", void 0);
__decorate([
    typeorm_1.Unique('C_CODE', ['C_CODE']),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "C_CODE", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "A_SEQ", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "A_NAME", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "A_UNIT", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "P_YEAR", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "P_YEAR_MONTH", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "M_TYPE_CODE", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "M_TYPE_NAME", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "M_GU_CODE", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Count.prototype, "M_GU_NAME", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Count.prototype, "length", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Count.prototype, "AVER_VAL", void 0);
Count = __decorate([
    typeorm_1.Entity()
], Count);
exports.Count = Count;
//# sourceMappingURL=count.entity.js.map