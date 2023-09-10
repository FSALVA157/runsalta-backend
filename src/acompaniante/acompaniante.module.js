"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcompanianteModule = void 0;
const common_1 = require("@nestjs/common");
const acompaniante_service_1 = require("./acompaniante.service");
const acompaniante_controller_1 = require("./acompaniante.controller");
const typeorm_1 = require("@nestjs/typeorm");
const acompaniante_entity_1 = require("./entities/acompaniante.entity");
let AcompanianteModule = class AcompanianteModule {
};
AcompanianteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([acompaniante_entity_1.Acompaniante])],
        controllers: [acompaniante_controller_1.AcompanianteController],
        providers: [acompaniante_service_1.AcompanianteService],
    })
], AcompanianteModule);
exports.AcompanianteModule = AcompanianteModule;
//# sourceMappingURL=acompaniante.module.js.map