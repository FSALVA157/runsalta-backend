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
exports.CreateUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUsuarioDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(500),
    (0, class_validator_1.Matches)(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'El password debe tener una letra mayuscula, una letra minuscula y un numero',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe ingresar el password.' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50, {
        message: 'El username debe tener entre $constraint1 y $constraint2 caracteres.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe ingresar el username.' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'El dni debe ser un número entero.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe ingresar el dni.' }),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "dni", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50, {
        message: 'El apellido debe tener entre $constraint1 y $constraint2 caracteres.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe ingresar el apellido.' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50, {
        message: 'El nombre debe tener entre $constraint1 y $constraint2 caracteres.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Debe ingresar el nombre.' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateUsuarioDto.prototype, "roles", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'El id de Institucion debe ser un número entero' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "id_institucion", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'El id de equipo territorial ser un número entero' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "id_equipot", void 0);
exports.CreateUsuarioDto = CreateUsuarioDto;
//# sourceMappingURL=create-usuario.dto.js.map