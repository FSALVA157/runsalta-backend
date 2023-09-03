import { Module } from '@nestjs/common';
import { ServiciosLService } from './servicios-l.service';
import { ServiciosLController } from './servicios-l.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosL } from './entities/servicios-l.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiciosL])],
  controllers: [ServiciosLController],
  providers: [ServiciosLService],
})
export class ServiciosLModule {}
