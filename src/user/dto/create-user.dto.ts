import { IsString, IsEmail, MaxLength, MinLength, Matches } from 'class-validator';
import { UserModel } from '../user.model';

export class CreateUserDto extends UserModel {

  @IsString()
  id: string;
  
  @IsString()
  @MaxLength(120)
  name: string;

  
  @IsString()
  @MinLength(4)
  @MaxLength(255)
  password: string;
}
