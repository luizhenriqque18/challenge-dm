import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "./../src/app.module";
import * as request from 'supertest';
import { CategoryService } from "./../src/category/category.service";
import { Category } from "./../src/category/category.model";
import { CreateCategoryDto } from "./../src/category/dtos/create-category.dto";

const returnOne = {id: 1, name: 'Celular'};
const returnTwo = [returnOne];

const mockCategoryService = {
    create(dto: CreateCategoryDto): Promise<Category> {
        return new Promise((resolve, reject)=> {resolve(<Category> returnOne)});
    },
    findAll(): Promise<Category[]>  {
        return new Promise((resolve, reject)=> {resolve(<Category[]> returnTwo)});;
    },
    findById(id: string): Promise<Category> {
        return new Promise((resolve, reject)=> {resolve(<Category> returnOne)});
    },
    delete(id: string) {
    }
};

describe('CategoryController (e2e)', () => {
    let app: INestApplication;
  
    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      })
      .overrideProvider(CategoryService)
      .useValue(mockCategoryService)
      .compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
    });
  
    it('/category (POST)', () => {
      return request(app.getHttpServer())
        .post('/category')
        .expect(201)
        .expect(returnOne);
    });

    it('findAll /category (GET)', () => {

        return request(app.getHttpServer())
            .get('/category')
            .expect(200)
            .expect(returnTwo);
    });

    it('findById /category/1 (GET)', () => {

        return request(app.getHttpServer())
            .get(`/category/${1}`)
            .expect(200)
            .expect(returnOne);
    });

    it('Delete /category/1 (DELETE)', () => {

        return request(app.getHttpServer())
            .delete(`/category/${1}`)
            .expect(204)
            .expect('');
    });

    afterAll(async () => {
        await app.close();
    });
});