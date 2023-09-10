"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSexoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sexo_dto_1 = require("./create-sexo.dto");
class UpdateSexoDto extends (0, mapped_types_1.PartialType)(create_sexo_dto_1.CreateSexoDto) {
}
exports.UpdateSexoDto = UpdateSexoDto;
//# sourceMappingURL=update-sexo.dto.js.map