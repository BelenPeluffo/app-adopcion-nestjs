import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { Repository } from 'typeorm';
import { Solicitud } from './entities/solicitude.entity';

@Injectable()
export class SolicitudesService {

  constructor(
    @InjectRepository(Solicitud)
    private solicitudesRepository: Repository<Solicitud>
  ) {}

  async create(createSolicitudeDto: CreateSolicitudeDto) {
    // return 'This action adds a new solicitude';
    const solicitud = this.solicitudesRepository.create(createSolicitudeDto);
    await this.solicitudesRepository.save(solicitud);
  }

  findAll(): Promise<Solicitud[]> {
    // return `This action returns all solicitudes`;
    return this.solicitudesRepository.find();
  }

  /* no
  findOne(id: number): Promise<Solicitud> {
    // return `This action returns a #${id} solicitude`;
    return this.solicitudesRepository.findOneBy({id});
  }

  // FALTA
  update(id: number, updateSolicitudeDto: UpdateSolicitudeDto) {
    return `This action updates a #${id} solicitude`;
  }
  */

  async remove(id: number): Promise<void> {
    //return `This action removes a #${id} solicitude`;
    await this.solicitudesRepository.delete(id)
  }
}
