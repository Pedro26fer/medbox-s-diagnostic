import { Test, TestingModule } from '@nestjs/testing';
import { ProblemasController } from './problemas.controller';

describe('ProblemasController', () => {
  let controller: ProblemasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProblemasController],
    }).compile();

    controller = module.get<ProblemasController>(ProblemasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
