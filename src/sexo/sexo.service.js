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
exports.SexoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sexo_entity_1 = require("./entities/sexo.entity");
const typeorm_2 = require("typeorm");
const handle_exception_1 = require("../common/filters/handle-exception");
let SexoService = class SexoService {
    constructor(sexoRepository) {
        this.sexoRepository = sexoRepository;
    }
    async create(createSexoDto) {
        try {
            const new_pais = this.sexoRepository.create(createSexoDto);
            await this.sexoRepository.save(new_pais);
            return new_pais;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit = 0, offset = 0 } = paginationDto;
            const res = await this.sexoRepository.find({
                take: limit,
                skip: offset,
            });
            return res;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findOne(id) {
        try {
            return await this.sexoRepository.findOneOrFail({
                where: { id_sexo: id },
            });
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async update(id, updateSexoDto) {
        try {
            const res = await this.sexoRepository.update({ id_sexo: id }, updateSexoDto);
            if (res.affected == 0)
                throw new common_1.NotFoundException('Error No se Actualizo ningún Registro Sexo');
            return res;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async remove(id) {
        try {
            const res = await this.sexoRepository.softDelete({
                id_sexo: id,
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
SexoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sexo_entity_1.Sexo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SexoService);
exports.SexoService = SexoService;
//# sourceMappingURL=sexo.service.js.map