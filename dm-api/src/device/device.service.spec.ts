import { getModelToken } from "@nestjs/sequelize";
import { Test, TestingModule } from "@nestjs/testing";
import { Category } from "../../src/category/category.model";
import { CategoryService } from "../../src/category/category.service";
import { CreateCategoryDto } from "../../src/category/dtos/create-category.dto";
import { Device } from "./device.model";
import { DeviceService } from "./device.service";
import { CreateDeviceDto } from "./dtos/create-device.dto";

const mockDeviceService = {
    create(dto: CreateDeviceDto) {
      return null;
    },
    findAll() {
      return null;
    },
    findById(id: string): Promise<any> {
      return null;
    },
    delete(id: string){
      return null;
    }
};

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

describe('DeviceService', () => {
    let service: DeviceService;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [DeviceService,
          {
            provide: getModelToken(Device),
            useValue: mockDeviceService,
          },
          CategoryService,
          {
            provide: getModelToken(Category),
            useValue: mockCategoryService,
          }]
      }).compile();
  
      service = module.get<DeviceService>(DeviceService);
    });
  
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
  