import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // return 'This action adds a new user';
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);

  }

  /*no las necesito
  findAll(): Promise<User[]> {
    //return `This action returns all users`;
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    //return `This action returns a #${id} user`;
    return this.userRepository.findOneBy({id});
  }
  */

  // para el auth:
  async findOne(username: string): Promise<User> {
    return this.userRepository.findOneBy({username});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    const oldUser = {
      id,
      ...updateUserDto
    }
    const user = await this.userRepository.preload(oldUser);
    if(!user) {
      throw new NotFoundException(`No se encuentra el user ${id}`);
    }
    return this.userRepository.save(user)
  }

  async remove(id: number): Promise<void> {
    // return `This action removes a #${id} user`;
    await this.userRepository.delete(id);
  }
}
