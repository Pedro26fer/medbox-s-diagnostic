import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { hashPassword } from 'src/utils/hashPasswordFunction';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>
    ){}

    public async create(userSchema: CreateUserDto) : Promise<UserModel>{
        userSchema = {
            ...userSchema,
            password: hashPassword(userSchema.password)
        }

        const nameUnavaible = await this.userRepository.findOne({
            where: {
                nome: userSchema.nome
            }
        })

        if(nameUnavaible){
            throw new ForbiddenException('Nome já em uso')
        }
        
        const newUser = await this.userRepository.save(userSchema)
        return newUser
    }
}
