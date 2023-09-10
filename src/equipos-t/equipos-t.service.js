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
exports.EquiposTService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const equipos_t_entity_1 = require("./entities/equipos-t.entity");
const typeorm_2 = require("typeorm");
const handle_exception_1 = require("../common/filters/handle-exception");
let EquiposTService = class EquiposTService {
    constructor(equipoRepository) {
        this.equipoRepository = equipoRepository;
    }
    async create(createEquiposTDto) {
        try {
            const new_legajo = this.equipoRepository.create(createEquiposTDto);
            await this.equipoRepository.save(new_legajo);
            return new_legajo;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit = 0, offset = 0 } = paginationDto;
            const data = await this.equipoRepository.findAndCount({
                take: limit,
                skip: offset,
            });
            const data_nueva = data[0].map((equipo) => {
                return {
                    id_equipo: equipo.id_equipo,
                    nombre: equipo.nombre,
                    cel_guardia: equipo.cel_guardia,
                    codigo: equipo.codigo,
                    codigo_postal: equipo.codigo_postal,
                    direccion: equipo.direccion,
                    email: equipo.email,
                    fax: equipo.fax,
                    observacion: equipo.observacion,
                    responsable: equipo.responsable,
                    telefono: equipo.telefono,
                    provincia_id: equipo.provincia_id,
                    provincia: equipo.provincia.provincia,
                    usuario_alta_id: equipo.usuario_alta_id,
                    usuario_modif_id: equipo.usuario_modif_id,
                };
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
            return await this.equipoRepository.findOneOrFail({
                where: { id_equipo: id },
            });
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async update(id, updateEquiposTDto) {
        try {
            const res = await this.equipoRepository.update({ id_equipo: id }, updateEquiposTDto);
            if (res.affected == 0)
                throw new common_1.NotFoundException('Error No se Actualizo ningún Registro Equipo');
            return res;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async remove(id) {
        try {
            const res = await this.equipoRepository.softDelete({ id_equipo: id });
            if (res.affected == 0)
                throw new Error('No existe el registro a borrar');
            return Object.assign(Object.assign({}, res), { message: `El Registro ${id} ha sido borrado` });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
EquiposTService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(equipos_t_entity_1.EquiposT)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EquiposTService);
exports.EquiposTService = EquiposTService;
//# sourceMappingURL=equipos-t.service.js.map