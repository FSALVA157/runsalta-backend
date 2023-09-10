"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDBExceptions = void 0;
const common_1 = require("@nestjs/common");
const handleDBExceptions = (error) => {
    if (error.code === 404) {
        throw new common_1.NotFoundException();
    }
    if (error.code === '23505') {
        throw new common_1.BadRequestException(error.detail);
    }
    if (error.code === 'ER_DUP_ENTRY') {
        throw new common_1.BadRequestException(error.message);
    }
    if (error.response.statusCode === 404) {
        throw new common_1.NotFoundException(error.message);
    }
    throw new common_1.InternalServerErrorException('Unexpected error  check the logs');
};
exports.handleDBExceptions = handleDBExceptions;
//# sourceMappingURL=handle-exception.js.map