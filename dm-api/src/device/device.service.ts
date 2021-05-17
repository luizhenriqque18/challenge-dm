import { HttpException, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "src/category/category.model";
import { CategoryService } from "src/category/category.service";
import { Device } from "./device.model";
import { CreateDeviceDto } from "./dtos/create-device.dto";

@Injectable()
export class DeviceService {
    constructor(
        @InjectModel(Device)
        private deviceModel: typeof Device,
        private categoryService: CategoryService) {}


    async create(dto: CreateDeviceDto): Promise<Device> {

        let category = await this.categoryService.findById(dto.categoryId.toString());
        console.log(category);

        return this.deviceModel.create(dto);
    }

    async findAll(): Promise<Device[]> {
        return this.deviceModel.findAll<Device>({
            attributes: {exclude: ['categoryId']},
            include: [{model: Category}],
        });
    }

    async findById(id: string): Promise<Device> {

        let device = await this.deviceModel
            .findOne({
                where: { id },
                attributes: {exclude: ['categoryId']},
                include: [{model: Category}],
            });

        if(!device) {
            throw new HttpException(`device id ${id} not found`, 404); 
        }

        return device;
    }

    async delete(id: string): Promise<void> {

        let device = await this.findById(id);
        
        await device.destroy();
    }
}