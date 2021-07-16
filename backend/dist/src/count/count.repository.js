"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountRepository = void 0;
const typeorm_1 = require("typeorm");
const count_entity_1 = require("./count.entity");
let CountRepository = class CountRepository extends typeorm_1.Repository {
};
CountRepository = __decorate([
    typeorm_1.EntityRepository(count_entity_1.Count)
], CountRepository);
exports.CountRepository = CountRepository;
//# sourceMappingURL=count.repository.js.map