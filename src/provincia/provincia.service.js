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
exports.ProvinciaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const provincia_entity_1 = require("./entities/provincia.entity");
const typeorm_2 = require("@nestjs/typeorm");
const handle_exception_1 = require("../common/filters/handle-exception");
let ProvinciaService = class ProvinciaService {
    constructor(provinciaRepository) {
        this.provinciaRepository = provinciaRepository;
    }
    async create(createProvinciaDto) {
        try {
            const new_provincia = this.provinciaRepository.create(createProvinciaDto);
            await this.provinciaRepository.save(new_provincia);
            return new_provincia;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit = 0, offset = 0 } = paginationDto;
            return await this.provinciaRepository.findAndCount({
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findOne(id) {
        try {
            return await this.provinciaRepository.findOneOrFail({
                where: { id_provincia: id },
            });
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async update(id, updateProvinciaDto) {
        try {
            const res = await this.provinciaRepository.update({ id_provincia: id }, updateProvinciaDto);
            if (res.affected == 0)
                throw new common_1.NotFoundException('Error No se Actualizo ningún Registro Legajo');
            return res;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async remove(id) {
        try {
            const res = await this.provinciaRepository.softDelete({
                id_provincia: id,
            });
            if (res.affected == 0)
                throw new Error('No existe el registro a borrar');
            return Object.assign(Object.assign({}, res), { message: `El Registro ${id} ha sido borrado` });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
ProvinciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(provincia_entity_1.Provincia)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProvinciaService);
exports.ProvinciaService = ProvinciaService;
//# sourceMappingURL=provincia.service.js.map