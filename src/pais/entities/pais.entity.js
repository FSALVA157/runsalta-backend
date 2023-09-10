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
exports.Pais = void 0;
const provincia_entity_1 = require("../../provincia/entities/provincia.entity");
const typeorm_1 = require("typeorm");
let Pais = class Pais {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pais.prototype, "id_pais", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Pais.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Pais.prototype, "nacionalidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => provincia_entity_1.Provincia, (provincia) => provincia.pais, {
        eager: true,
    }),
    __metadata("design:type", Array)
], Pais.prototype, "provincias", void 0);
Pais = __decorate([
    (0, typeorm_1.Entity)()
], Pais);
exports.Pais = Pais;
//# sourceMappingURL=pais.entity.js.map