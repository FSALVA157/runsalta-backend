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
exports.MunicipioController = void 0;
const common_1 = require("@nestjs/common");
const municipio_service_1 = require("./municipio.service");
const create_municipio_dto_1 = require("./dto/create-municipio.dto");
const update_municipio_dto_1 = require("./dto/update-municipio.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let MunicipioController = class MunicipioController {
    constructor(municipioService) {
        this.municipioService = municipioService;
    }
    create(createMunicipioDto) {
        return this.municipioService.create(createMunicipioDto);
    }
    findAll(paginationDto) {
        return this.municipioService.findAll(paginationDto);
    }
    findOne(id) {
        return this.municipioService.findOne(+id);
    }
    update(id, updateMunicipioDto) {
        return this.municipioService.update(+id, updateMunicipioDto);
    }
    remove(id) {
        return this.municipioService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_municipio_dto_1.CreateMunicipioDto]),
    __metadata("design:returntype", void 0)
], MunicipioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], MunicipioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MunicipioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_municipio_dto_1.UpdateMunicipioDto]),
    __metadata("design:returntype", void 0)
], MunicipioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MunicipioController.prototype, "remove", null);
MunicipioController = __decorate([
    (0, common_1.Controller)('municipio'),
    __metadata("design:paramtypes", [municipio_service_1.MunicipioService])
], MunicipioController);
exports.MunicipioController = MunicipioController;
//# sourceMappingURL=municipio.controller.js.map