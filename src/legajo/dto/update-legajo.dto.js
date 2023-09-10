"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLegajoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_legajo_dto_1 = require("./create-legajo.dto");
class UpdateLegajoDto extends (0, mapped_types_1.PartialType)(create_legajo_dto_1.CreateLegajoDto) {
}
exports.UpdateLegajoDto = UpdateLegajoDto;
//# sourceMappingURL=update-legajo.dto.js.map