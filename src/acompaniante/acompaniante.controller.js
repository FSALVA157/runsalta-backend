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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcompanianteController = void 0;
const common_1 = require("@nestjs/common");
const acompaniante_service_1 = require("./acompaniante.service");
const create_acompaniante_dto_1 = require("./dto/create-acompaniante.dto");
const update_acompaniante_dto_1 = require("./dto/update-acompaniante.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let AcompanianteController = class AcompanianteController {
    constructor(acompanianteService) {
        this.acompanianteService = acompanianteService;
    }
    create(createAcompanianteDto) {
        return this.acompanianteService.create(createAcompanianteDto);
    }
    findAll(paginationDto) {
        return this.acompanianteService.findAll(paginationDto);
    }
    findOne(id) {
        return this.acompanianteService.findOne(+id);
    }
    update(id, updateAcompanianteDto) {
        return this.acompanianteService.update(+id, updateAcompanianteDto);
    }
    remove(id) {
        return this.acompanianteService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_acompaniante_dto_1.CreateAcompanianteDto]),
    __metadata("design:returntype", void 0)
], AcompanianteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], AcompanianteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcompanianteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_acompaniante_dto_1.UpdateAcompanianteDto]),
    __metadata("design:returntype", void 0)
], AcompanianteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcompanianteController.prototype, "remove", null);
AcompanianteController = __decorate([
    (0, common_1.Controller)('acompaniante'),
    __metadata("design:paramtypes", [acompaniante_service_1.AcompanianteService])
], AcompanianteController);
exports.AcompanianteController = AcompanianteController;
//# sourceMappingURL=acompaniante.controller.js.map