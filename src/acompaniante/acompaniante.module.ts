import { Module } from '@nestjs/common';
import { AcompanianteService } from './acompaniante.service';
import { AcompanianteController } from './acompaniante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acompaniante } from './entities/acompaniante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Acompaniante])],
  controllers: [AcompanianteController],
  providers: [AcompanianteService],
})
export class AcompanianteModule {}
