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
exports.CreateAcompanianteDto = void 0;
const class_validator_1 = require("class-validator");
class CreateAcompanianteDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAcompanianteDto.prototype, "activo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El apellido debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El nombre debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El nombre debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "domicilio", void 0);
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
], CreateAcompanianteDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 100, {
        message: 'El telefono debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 50, {
        message: 'El sexo debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "sexo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 50, {
        message: 'El dni debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "dni", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAcompanianteDto.prototype, "edad", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "capacitad_en_egreso", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "descripcion_perfil", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "descripcion_trabajo_act", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "tipo_disponibilidad", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "file_inf_admision", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "file_inf_baja", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "latitud", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "longitud", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "nivel_educacion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "subvenc_por_prog_eg", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "tiene_trabajo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 100, {
        message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateAcompanianteDto.prototype, "titulo_educacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAcompanianteDto.prototype, "id_experiencia_acomp", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAcompanianteDto.prototype, "id_usuario", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAcompanianteDto.prototype, "id_usuario_alta", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAcompanianteDto.prototype, "id_usuario_modif", void 0);
exports.CreateAcompanianteDto = CreateAcompanianteDto;
//# sourceMappingURL=create-acompaniante.dto.js.map