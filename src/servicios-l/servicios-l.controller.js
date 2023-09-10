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
exports.ServiciosLController = void 0;
const common_1 = require("@nestjs/common");
const servicios_l_service_1 = require("./servicios-l.service");
const create_servicios_l_dto_1 = require("./dto/create-servicios-l.dto");
const update_servicios_l_dto_1 = require("./dto/update-servicios-l.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
let ServiciosLController = class ServiciosLController {
    constructor(serviciosLService) {
        this.serviciosLService = serviciosLService;
    }
    create(createServiciosLDto) {
        return this.serviciosLService.create(createServiciosLDto);
    }
    findAll(paginationDto) {
        return this.serviciosLService.findAll(paginationDto);
    }
    findOne(id) {
        return this.serviciosLService.findOne(+id);
    }
    update(id, updateServiciosLDto) {
        return this.serviciosLService.update(+id, updateServiciosLDto);
    }
    remove(id) {
        return this.serviciosLService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servicios_l_dto_1.CreateServiciosLDto]),
    __metadata("design:returntype", void 0)
], ServiciosLController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], ServiciosLController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosLController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_servicios_l_dto_1.UpdateServiciosLDto]),
    __metadata("design:returntype", void 0)
], ServiciosLController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosLController.prototype, "remove", null);
ServiciosLController = __decorate([
    (0, common_1.Controller)('servicios-l'),
    __metadata("design:paramtypes", [servicios_l_service_1.ServiciosLService])
], ServiciosLController);
exports.ServiciosLController = ServiciosLController;
//# sourceMappingURL=servicios-l.controller.js.map