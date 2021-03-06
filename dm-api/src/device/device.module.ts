import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CategoryModule } from "./../category/category.module";
import { DeviceController } from "./device.controller";
import { Device } from "./device.model";
import { DeviceService } from "./device.service";


@Module({
    imports: [SequelizeModule.forFeature([Device]), CategoryModule],
    providers: [DeviceService],
    controllers: [DeviceController]
})
export class DeviceModule {}