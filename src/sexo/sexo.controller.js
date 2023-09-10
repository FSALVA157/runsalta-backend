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
exports.SexoController = void 0;
const common_1 = require("@nestjs/common");
const sexo_service_1 = require("./sexo.service");
const create_sexo_dto_1 = require("./dto/create-sexo.dto");
const update_sexo_dto_1 = require("./dto/update-sexo.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let SexoController = class SexoController {
    constructor(sexoService) {
        this.sexoService = sexoService;
    }
    create(createSexoDto) {
        return this.sexoService.create(createSexoDto);
    }
    findAll(paginationDto) {
        return this.sexoService.findAll(paginationDto);
    }
    findOne(id) {
        return this.sexoService.findOne(+id);
    }
    update(id, updateSexoDto) {
        return this.sexoService.update(+id, updateSexoDto);
    }
    remove(id) {
        return this.sexoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sexo_dto_1.CreateSexoDto]),
    __metadata("design:returntype", void 0)
], SexoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], SexoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SexoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sexo_dto_1.UpdateSexoDto]),
    __metadata("design:returntype", void 0)
], SexoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SexoController.prototype, "remove", null);
SexoController = __decorate([
    (0, common_1.Controller)('sexo'),
    __metadata("design:paramtypes", [sexo_service_1.SexoService])
], SexoController);
exports.SexoController = SexoController;
//# sourceMappingURL=sexo.controller.js.map