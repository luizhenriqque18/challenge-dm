import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { Device } from "./../src/device/device.model";
import { DeviceService } from "./../src/device/device.service";
import { CreateDeviceDto } from "./../src/device/dtos/create-device.dto";
import * as request from 'supertest';
import { AppModule } from "./../src/app.module";
import { Category } from "./../src/category/category.model";

const category = {id: 1, name: 'Celular'};
const returnOne = { id: 1, color: "blue", category, partNumber: 123 };
const returnTwo = [{ id: 1, color: "blue", category, partNumber: 123 }];

const mockDeviceService = {
    create(dto: CreateDeviceDto): Promise<Device> {
      return new Promise((resolve, reject)=> {resolve(<Device> returnOne)});
    },
    findAll(): Promise<Device[]>  {
      return new Promise((resolve, reject)=> {resolve(<Device[]> returnTwo)});;
    },
    findById(id: string): Promise<Device> {
      return new Promise((resolve, reject)=> {resolve(<Device> returnOne)});
    },
    delete(id: string) {
    }
};

describe('DeviceController (e2e)', () => {
    let app: INestApplication;
  
    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      })
      .overrideProvider(DeviceService)
      .useValue(mockDeviceService)
      .compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
    });
  
    it('create /device (POST)', () => {

        let device: CreateDeviceDto = { color: 'blue', categoryId: 1, partNumber: 123 }

        return request(app.getHttpServer())
            .post('/device/')
            .send(device)
            .expect(201)
            .expect(returnOne);
    });

    it('findAll /device (GET)', () => {

        return request(app.getHttpServer())
            .get('/device')
            .expect(200)
            .expect(returnTwo);
    });

    it('findById /device/1 (GET)', () => {

        return request(app.getHttpServer())
            .get(`/device/${1}`)
            .expect(200)
            .expect(returnOne);
    });

    it('Delete /device/1 (DELETE)', () => {

        return request(app.getHttpServer())
            .delete(`/device/${1}`)
            .expect(204)
            .expect('');
    });

    afterAll(async () => {
        await app.close();
    });
});