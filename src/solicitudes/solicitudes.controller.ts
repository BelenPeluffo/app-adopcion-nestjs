import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';

@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Post()
  create(@Body() createSolicitudeDto: CreateSolicitudeDto) {
    return this.solicitudesService.create(createSolicitudeDto);
  }

  @Get()
  findAll() {
    return this.solicitudesService.findAll();
  }

  /* no los necesito
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.solicitudesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSolicitudeDto: UpdateSolicitudeDto
  ) {
    return this.solicitudesService.update(+id, updateSolicitudeDto);
  }
*/

  @Delete(':id')
  remove(
    @Param('id',ParseIntPipe) id: number
  ) {
    return this.solicitudesService.remove(+id);
  }
}
