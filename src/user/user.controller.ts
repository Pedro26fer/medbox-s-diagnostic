import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly useService: UserService){}

    @Post()
    public async create(@Body() body: CreateUserDto): Promise<any>{
        const newUser = await this.useService.create(body)
        return {...newUser, password: undefined}
    }
}


