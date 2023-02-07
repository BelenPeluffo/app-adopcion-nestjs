import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string,pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result} = user;
            return result;
        }
        //return null
        throw new NotFoundException(`El user ${username} no se encuentra en la base de datos`);
        /* debería crear excepciones en función de que
        1. esté mal el username y
        2. esté mal la contraseña?*/
    }
}
