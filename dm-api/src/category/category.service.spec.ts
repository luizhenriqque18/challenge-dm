import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

const mockCategoryService = {
  create(dto: CreateCategoryDto) {
    return null;
  },
  findAll() {
    return this.categoryModel.findAll();
  },
  findById(id: string): Promise<Category> {
    return null;
  },
  delete(id: string){
    return null;
  }
};

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService,
        {
          provide: getModelToken(Category),
          useValue: mockCategoryService,
        }]
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
