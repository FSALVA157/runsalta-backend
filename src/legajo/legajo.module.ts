import { Module } from '@nestjs/common';
import { LegajoService } from './legajo.service';
import { LegajoController } from './legajo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Legajo } from './entities/legajo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Legajo])],
  controllers: [LegajoController],
  providers: [LegajoService],
})
export class LegajoModule {}
