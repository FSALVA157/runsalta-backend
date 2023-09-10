"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquiposTModule = void 0;
const common_1 = require("@nestjs/common");
const equipos_t_service_1 = require("./equipos-t.service");
const equipos_t_controller_1 = require("./equipos-t.controller");
const typeorm_1 = require("@nestjs/typeorm");
const equipos_t_entity_1 = require("./entities/equipos-t.entity");
let EquiposTModule = class EquiposTModule {
};
EquiposTModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([equipos_t_entity_1.EquiposT])],
        controllers: [equipos_t_controller_1.EquiposTController],
        providers: [equipos_t_service_1.EquiposTService],
    })
], EquiposTModule);
exports.EquiposTModule = EquiposTModule;
//# sourceMappingURL=equipos-t.module.js.map