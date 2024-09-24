import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsinaModule } from './usina/usina.module';
import { ProblemasModule } from './problemas/problemas.module';
import { UserModule } from './user/user.module';
import dotenv from 'dotenv'

dotenv.config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USER,
      password:process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [],
      synchronize: true,
      autoLoadEntities: true

    }),
    UsinaModule, 
    ProblemasModule,
    UserModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
