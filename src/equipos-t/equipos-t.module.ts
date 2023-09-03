import { Module } from '@nestjs/common';
import { EquiposTService } from './equipos-t.service';
import { EquiposTController } from './equipos-t.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquiposT } from './entities/equipos-t.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EquiposT])],
  controllers: [EquiposTController],
  providers: [EquiposTService],
})
export class EquiposTModule {}
