import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category)
        private categoryModel: typeof Category) {}


    async create(dto: CreateCategoryDto): Promise<Category> {
        return this.categoryModel.create(dto);
    }

    async findAll(): Promise<Category[]> {
        return this.categoryModel.findAll();
    }

    async findById(id: string): Promise<Category> {

        let device = await this.categoryModel
            .findOne({
                where: { id },
            });

        if(!device) {
            throw new HttpException(`category id ${id} not found`, 404); 
        }

        return device;
    }

    async delete(id: string): Promise<void> {

        let device = await this.findById(id);
        
        await device.destroy();
    }
}
