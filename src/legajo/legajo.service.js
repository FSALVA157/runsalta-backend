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
exports.LegajoService = void 0;
const common_1 = require("@nestjs/common");
const legajo_entity_1 = require("./entities/legajo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const handle_exception_1 = require("../common/filters/handle-exception");
let LegajoService = class LegajoService {
    constructor(legajoRepository) {
        this.legajoRepository = legajoRepository;
    }
    async create(createLegajoDto) {
        try {
            const new_legajo = this.legajoRepository.create(createLegajoDto);
            await this.legajoRepository.save(new_legajo);
            return new_legajo;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit = 0, offset = 0 } = paginationDto;
            const data = await this.legajoRepository.findAndCount({
                take: limit,
                skip: offset,
            });
            const data_nueva = data[0].map((legajo) => {
                return Object.assign(Object.assign({}, legajo), { sexo: legajo.sexo.sexo, equipo_territorial: legajo.equipo_territorial.nombre });
            });
            return {
                data: data_nueva,
                total: data[1],
            };
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findOne(id) {
        try {
            return await this.legajoRepository.findOneOrFail({
                where: { id_legajo: id },
            });
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async update(id, updateLegajoDto) {
        try {
            const res = await this.legajoRepository.update({ id_legajo: id }, updateLegajoDto);
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
            const res = await this.legajoRepository.softDelete({ id_legajo: id });
            if (res.affected == 0)
                throw new Error('No existe el registro a borrar');
            return Object.assign(Object.assign({}, res), { message: `El Registro ${id} ha sido borrado` });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
LegajoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(legajo_entity_1.Legajo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LegajoService);
exports.LegajoService = LegajoService;
//# sourceMappingURL=legajo.service.js.map