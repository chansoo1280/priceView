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
exports.Data = void 0;
const typeorm_1 = require("typeorm");
const Etc_entity_1 = require("../Etc.entity");
let Data = class Data extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Data.prototype, "data_seq", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Etc_entity_1.Etc, (etc) => etc.datas),
    typeorm_1.JoinColumn({ name: 'etc_seq' }),
    __metadata("design:type", Etc_entity_1.Etc)
], Data.prototype, "etc", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Data.prototype, "DATE", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Data.prototype, "VALUE", void 0);
Data = __decorate([
    typeorm_1.Entity()
], Data);
exports.Data = Data;
//# sourceMappingURL=Data.entity.js.map