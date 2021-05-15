import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Device } from './devices/device.model';
import { DevicesModule } from './devices/device.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'device-management',
      models: [Device],
    }),
    DevicesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
