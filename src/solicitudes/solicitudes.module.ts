import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesController } from './solicitudes.controller';
import { Solicitud } from './entities/solicitude.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitud])],
  controllers: [SolicitudesController],
  providers: [SolicitudesService],
  exports: [TypeOrmModule]
})
export class SolicitudesModule {}
