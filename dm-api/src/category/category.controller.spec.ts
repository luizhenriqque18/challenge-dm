import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
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


describe('CategoryController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [{
        provide: CategoryService,
        useValue: mockCategoryService
      }]
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
