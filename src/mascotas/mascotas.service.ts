import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './entities/mascota.entity';

@Injectable()
export class MascotasService {

  constructor(
    @InjectRepository(Mascota)
    private mascotasRepository: Repository<Mascota>
  ) {}

  async create(createMascotaDto: CreateMascotaDto) {
    // return 'This action adds a new mascota';
    const mascota = this.mascotasRepository.create(createMascotaDto);
    await this.mascotasRepository.save(mascota);
  }

  findAll(): Promise<Mascota[]> {
    // return `This action returns all mascotas`;
    return this.mascotasRepository.find();
  }

  findOne(id: number): Promise<Mascota> {
    // return `This action returns a #${id} mascota`;
    return this.mascotasRepository.findOneBy({id});
  }

  // FALTA
  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    return `This action updates a #${id} mascota`;
  }

  async remove(id: number): Promise<void> {
    // return `This action removes a #${id} mascota`;
    await this.mascotasRepository.delete(id);
  }
}
