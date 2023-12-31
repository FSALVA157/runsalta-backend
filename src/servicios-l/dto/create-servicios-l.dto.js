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
exports.CreateServiciosLDto = void 0;
const class_validator_1 = require("class-validator");
class CreateServiciosLDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100, {
        message: 'El nombre del equipo debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateServiciosLDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 100, {
        message: 'El celular de guardia debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateServiciosLDto.prototype, "cel_guardia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100, {
        message: 'El codigo postal debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateServiciosLDto.prototype, "codigo_postal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateServiciosLDto.prototype, "convenio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 100, {
        message: 'La dirección debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateServiciosLDto.prototype, "direccion", void 0);
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
], CreateServiciosLDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 100, {
        message: 'El campo observacion debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateServiciosLDto.prototype, "observacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 100, {
        message: 'El telefono debe tener entre $constraint1 y $constraint2 caracteres',
    }),
    __metadata("design:type", String)
], CreateServiciosLDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateServiciosLDto.prototype, "equipot_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateServiciosLDto.prototype, "usuario_alta_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateServiciosLDto.prototype, "usuario_modif_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateServiciosLDto.prototype, "provincia_id", void 0);
exports.CreateServiciosLDto = CreateServiciosLDto;
//# sourceMappingURL=create-servicios-l.dto.js.map