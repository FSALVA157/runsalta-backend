import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegajoModule } from './legajo/legajo.module';
import { CommonModule } from './common/common.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
    NacionalidadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
