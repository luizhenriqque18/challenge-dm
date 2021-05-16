import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { Category } from "./category.model";
import { CategoryService } from './category.service';
import { CreateCategoryDto } from "./dtos/create-category.dto";

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Post()
    @HttpCode(201)
    create(@Body() dto: CreateCategoryDto): Promise<Category> {
        return this.categoryService.create(dto);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id') id: string): Promise<void> {
        return this.categoryService.delete(id);
    }

    @Get(':id')
    @HttpCode(200)
    findById(@Param('id') id: string): Promise<Category> {
        return this.categoryService.findById(id);
    }

    @Get()
    @HttpCode(200)
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
}
