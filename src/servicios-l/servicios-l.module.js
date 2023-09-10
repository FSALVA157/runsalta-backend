"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosLModule = void 0;
const common_1 = require("@nestjs/common");
const servicios_l_service_1 = require("./servicios-l.service");
const servicios_l_controller_1 = require("./servicios-l.controller");
const typeorm_1 = require("@nestjs/typeorm");
const servicios_l_entity_1 = require("./entities/servicios-l.entity");
let ServiciosLModule = class ServiciosLModule {
};
ServiciosLModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([servicios_l_entity_1.ServiciosL])],
        controllers: [servicios_l_controller_1.ServiciosLController],
        providers: [servicios_l_service_1.ServiciosLService],
    })
], ServiciosLModule);
exports.ServiciosLModule = ServiciosLModule;
//# sourceMappingURL=servicios-l.module.js.map