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
exports.LegajoController = void 0;
const common_1 = require("@nestjs/common");
const legajo_service_1 = require("./legajo.service");
const create_legajo_dto_1 = require("./dto/create-legajo.dto");
const update_legajo_dto_1 = require("./dto/update-legajo.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let LegajoController = class LegajoController {
    constructor(legajoService) {
        this.legajoService = legajoService;
    }
    create(createLegajoDto) {
        return this.legajoService.create(createLegajoDto);
    }
    findAll(paginationDto) {
        return this.legajoService.findAll(paginationDto);
    }
    findOne(id) {
        return this.legajoService.findOne(+id);
    }
    update(id, updateLegajoDto) {
        return this.legajoService.update(+id, updateLegajoDto);
    }
    remove(id) {
        return this.legajoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_legajo_dto_1.CreateLegajoDto]),
    __metadata("design:returntype", void 0)
], LegajoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], LegajoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LegajoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_legajo_dto_1.UpdateLegajoDto]),
    __metadata("design:returntype", void 0)
], LegajoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LegajoController.prototype, "remove", null);
LegajoController = __decorate([
    (0, common_1.Controller)('legajo'),
    __metadata("design:paramtypes", [legajo_service_1.LegajoService])
], LegajoController);
exports.LegajoController = LegajoController;
//# sourceMappingURL=legajo.controller.js.map