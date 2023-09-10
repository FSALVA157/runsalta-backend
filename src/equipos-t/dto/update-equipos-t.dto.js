"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquiposTDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_equipos_t_dto_1 = require("./create-equipos-t.dto");
class UpdateEquiposTDto extends (0, mapped_types_1.PartialType)(create_equipos_t_dto_1.CreateEquiposTDto) {
}
exports.UpdateEquiposTDto = UpdateEquiposTDto;
//# sourceMappingURL=update-equipos-t.dto.js.map