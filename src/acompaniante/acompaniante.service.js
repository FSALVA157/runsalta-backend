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
exports.AcompanianteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const acompaniante_entity_1 = require("./entities/acompaniante.entity");
const typeorm_2 = require("typeorm");
const handle_exception_1 = require("../common/filters/handle-exception");
let AcompanianteService = class AcompanianteService {
    constructor(acompanianteRepository) {
        this.acompanianteRepository = acompanianteRepository;
    }
    async create(createAcompanianteDto) {
        try {
            const new_acompaniante = this.acompanianteRepository.create(createAcompanianteDto);
            await this.acompanianteRepository.save(new_acompaniante);
            return new_acompaniante;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit = 0, offset = 0 } = paginationDto;
            return await this.acompanianteRepository.findAndCount({
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findOne(id) {
        return `This action returns a #${id} acompaniante`;
    }
    async update(id, updateAcompanianteDto) {
        return `This action updates a #${id} acompaniante`;
    }
    async remove(id) {
        return `This action removes a #${id} acompaniante`;
    }
};
AcompanianteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(acompaniante_entity_1.Acompaniante)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AcompanianteService);
exports.AcompanianteService = AcompanianteService;
//# sourceMappingURL=acompaniante.service.js.map