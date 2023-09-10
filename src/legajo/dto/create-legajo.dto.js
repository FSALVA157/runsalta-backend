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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLegajoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateLegajoDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateLegajoDto.prototype, "activo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El apellido debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El nombre debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateLegajoDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El campo calle debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "calle_legajo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "tpo_pub_prv_cob_sal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 255, {
        message: 'El campo codigo debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "codigo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "constancia_parto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El campo detalle problema de salud debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "detalle_probl_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El campo direccion debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/, {
        message: 'El email no es correcto',
    }),
    (0, class_validator_1.Length)(4, 255, {
        message: 'El email debe tener entre $constraint1 y $constraint2 caracteres en este momento tu texto tiene una longitud de $value letras',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El campo direccion debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "escolarizado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El campo establecimiento debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "establecimento_escolarizado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "estado_documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "estado_causa_judicial", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "estado_obra_social", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "estado_probl_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El campo file dni debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "file_dni", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El campo fiel partida  debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "file_partida_nac", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El campo file problematica debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "file_problematica_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El campo nivel educacion debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "nivel_educacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El numero documento debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "nro_documento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El numero de calle debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "numero_calle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El campo obs obra social debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "observ_obra_social", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El campo observaciones debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "observaciones", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "partida_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El campo problema de salud debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "probl_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El campo referencia llamada 102 debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "referencia_llamada102", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "se_interv_en_su_gestion", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "sexo_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El campo telefono debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El campo referencia telefono legajo debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "telefono_legajo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "tpo_cobertura_salud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255, {
        message: 'El campo tipo documento debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateLegajoDto.prototype, "tipo_documento", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "usuario_alta_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "usuario_modif_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "localidad_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "municipio_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "nacionalidad_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "obra_social_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "pais_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "provincia_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "acompaniante_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateLegajoDto.prototype, "equipot_id", void 0);
exports.CreateLegajoDto = CreateLegajoDto;
//# sourceMappingURL=create-legajo.dto.js.map