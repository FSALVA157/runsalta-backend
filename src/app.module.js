"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const legajo_module_1 = require("./legajo/legajo.module");
const common_module_1 = require("./common/common.module");
const pais_module_1 = require("./pais/pais.module");
const municipio_module_1 = require("./municipio/municipio.module");
const provincia_module_1 = require("./provincia/provincia.module");
const acompaniante_module_1 = require("./acompaniante/acompaniante.module");
const localidad_module_1 = require("./localidad/localidad.module");
const sexo_module_1 = require("./sexo/sexo.module");
const equipos_t_module_1 = require("./equipos-t/equipos-t.module");
const servicios_l_module_1 = require("./servicios-l/servicios-l.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                autoLoadEntities: true,
                synchronize: true,
            }),
            legajo_module_1.LegajoModule,
            common_module_1.CommonModule,
            pais_module_1.PaisModule,
            municipio_module_1.MunicipioModule,
            provincia_module_1.ProvinciaModule,
            acompaniante_module_1.AcompanianteModule,
            localidad_module_1.LocalidadModule,
            sexo_module_1.SexoModule,
            equipos_t_module_1.EquiposTModule,
            servicios_l_module_1.ServiciosLModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map