"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRepository = void 0;
const typeorm_1 = require("typeorm");
const price_entity_1 = require("./price.entity");
let PriceRepository = class PriceRepository extends typeorm_1.Repository {
};
PriceRepository = __decorate([
    typeorm_1.EntityRepository(price_entity_1.Price)
], PriceRepository);
exports.PriceRepository = PriceRepository;
//# sourceMappingURL=price.repository.js.map