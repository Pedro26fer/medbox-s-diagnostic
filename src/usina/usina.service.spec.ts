import { Test, TestingModule } from '@nestjs/testing';
import { UsinaService } from './usina.service';

describe('UsinaService', () => {
  let service: UsinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsinaService],
    }).compile();

    service = module.get<UsinaService>(UsinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
