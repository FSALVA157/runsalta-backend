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
exports.PaisController = void 0;
const common_1 = require("@nestjs/common");
const pais_service_1 = require("./pais.service");
const create_pais_dto_1 = require("./dto/create-pais.dto");
const update_pais_dto_1 = require("./dto/update-pais.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let PaisController = class PaisController {
    constructor(paisService) {
        this.paisService = paisService;
    }
    create(createPaisDto) {
        return this.paisService.create(createPaisDto);
    }
    findAll(paginationDto) {
        return this.paisService.findAll(paginationDto);
    }
    findOne(id) {
        return this.paisService.findOne(+id);
    }
    update(id, updatePaisDto) {
        return this.paisService.update(+id, updatePaisDto);
    }
    remove(id) {
        return this.paisService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pais_dto_1.CreatePaisDto]),
    __metadata("design:returntype", void 0)
], PaisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], PaisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pais_dto_1.UpdatePaisDto]),
    __metadata("design:returntype", void 0)
], PaisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaisController.prototype, "remove", null);
PaisController = __decorate([
    (0, common_1.Controller)('pais'),
    __metadata("design:paramtypes", [pais_service_1.PaisService])
], PaisController);
exports.PaisController = PaisController;
//# sourceMappingURL=pais.controller.js.map