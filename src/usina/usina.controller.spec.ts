import { Test, TestingModule } from '@nestjs/testing';
import { UsinaController } from './usina.controller';

describe('UsinaController', () => {
  let controller: UsinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsinaController],
    }).compile();

    controller = module.get<UsinaController>(UsinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
