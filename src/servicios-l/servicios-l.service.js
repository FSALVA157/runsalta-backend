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
exports.ServiciosLService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const servicios_l_entity_1 = require("./entities/servicios-l.entity");
const handle_exception_1 = require("../common/filters/handle-exception");
let ServiciosLService = class ServiciosLService {
    constructor(serviciolRepository) {
        this.serviciolRepository = serviciolRepository;
    }
    async create(createServiciosLDto) {
        try {
            const new_serviciol = this.serviciolRepository.create(createServiciosLDto);
            await this.serviciolRepository.save(new_serviciol);
            return new_serviciol;
        }
        catch (error) {
            (0, handle_exception_1.handleDBExceptions)(error);
        }
    }
    async findAll(paginationDto) {
        try {
            const { limit = 0, offset = 0 } = paginationDto;
            const data = await this.serviciolRepository.findAndCount({
                take: limit,
                skip: offset,
            });
            const data_nueva = data[0].map((servicio) => {
                return {
                    id_serviciol: servicio.id_serviciol,
                    nombre: servicio.nombre,
                    cel_guardia: servicio.cel_guardia,
                    codigo: servicio.codigo_postal,
                    convenio: servicio.convenio,
                    direccion: servicio.direccion,
                    email: servicio.email,
                    observacion: servicio.observacion,
                    telefono: servicio.telefono,
                    equipot_id: servicio.equipot_id,
                    equipo_territorial: servicio.equipo_territorial.nombre,
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
        return `This action returns a #${id} serviciosL`;
    }
    async update(id, updateServiciosLDto) {
        return `This action updates a #${id} serviciosL`;
    }
    async remove(id) {
        return `This action removes a #${id} serviciosL`;
    }
};
ServiciosLService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(servicios_l_entity_1.ServiciosL)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServiciosLService);
exports.ServiciosLService = ServiciosLService;
//# sourceMappingURL=servicios-l.service.js.map