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
exports.Etc = void 0;
const typeorm_1 = require("typeorm");
const Data_entity_1 = require("./data/Data.entity");
let Etc = class Etc extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Etc.prototype, "etc_seq", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Etc.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany((type) => Data_entity_1.Data, (data) => data.etc),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Etc.prototype, "datas", void 0);
Etc = __decorate([
    typeorm_1.Entity()
], Etc);
exports.Etc = Etc;
//# sourceMappingURL=Etc.entity.js.map