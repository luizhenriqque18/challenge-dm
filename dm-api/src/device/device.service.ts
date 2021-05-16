import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Device } from "./device.model";
import { CreateDeviceDto } from "./dtos/create-device.dto";

@Injectable()
export class DeviceService {
    constructor(
        @InjectModel(Device)
        private deviceModel: typeof Device) {}


    async create(dto: CreateDeviceDto): Promise<Device> {
        return this.deviceModel.create(dto);
    }

    async findAll(): Promise<Device[]> {
        return this.deviceModel.findAll();
    }

    async findById(id: string): Promise<Device> {

        let device = await this.deviceModel
            .findOne({
                where: { id },
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