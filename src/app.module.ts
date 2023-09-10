import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegajoModule } from './legajo/legajo.module';
import { CommonModule } from './common/common.module';
import { PaisModule } from './pais/pais.module';
import { MunicipioModule } from './municipio/municipio.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { AcompanianteModule } from './acompaniante/acompaniante.module';
import { LocalidadModule } from './localidad/localidad.module';
import { SexoModule } from './sexo/sexo.module';
import { EquiposTModule } from './equipos-t/equipos-t.module';
import { ServiciosLModule } from './servicios-l/servicios-l.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    LegajoModule,
    CommonModule,
    PaisModule,
    MunicipioModule,
    ProvinciaModule,
    AcompanianteModule,
    LocalidadModule,
    SexoModule,
    EquiposTModule,
    ServiciosLModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
