import { Test, TestingModule } from "@nestjs/testing";
import { DeviceController } from "./device.controller";
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

describe('DeviceController', () => {
    let controller: DeviceController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [DeviceController],
        providers: [{
          provide: DeviceService,
          useValue: mockDeviceService
        }]
      }).compile();
  
      controller = module.get<DeviceController>(DeviceController);
    });
  
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });