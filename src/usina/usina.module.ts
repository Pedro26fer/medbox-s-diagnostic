import { Module } from '@nestjs/common';
import { UsinaController } from './usina.controller';
import { UsinaService } from './usina.service';

@Module({
  controllers: [UsinaController],
  providers: [UsinaService]
})
export class UsinaModule {}
