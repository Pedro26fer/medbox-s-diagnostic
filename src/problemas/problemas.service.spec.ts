import { Test, TestingModule } from '@nestjs/testing';
import { ProblemasService } from './problemas.service';

describe('ProblemasService', () => {
  let service: ProblemasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProblemasService],
    }).compile();

    service = module.get<ProblemasService>(ProblemasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
