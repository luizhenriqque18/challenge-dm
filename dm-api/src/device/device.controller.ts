import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, Param, Post, SerializeOptions, UseInterceptors } from "@nestjs/common";
import { Device } from "./device.model";
import { DeviceService } from "./device.service";
import { CreateDeviceDto } from "./dtos/create-device.dto";

@Controller('device')
export class DeviceController {
    constructor(private deviceService: DeviceService){}

    @Post()
    @HttpCode(201)
    create(@Body() dto: CreateDeviceDto): Promise<Device> {
        return this.deviceService.create(dto);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id') id: string): Promise<void> {
        return this.deviceService.delete(id);
    }

    @Get(':id')
    @HttpCode(200)
    findById(@Param('id') id: string): Promise<Device> {
        return this.deviceService.findById(id);
    }

    @Get()
    @HttpCode(200)
    findAll(): Promise<Device[]> {
        return this.deviceService.findAll();
    }
}