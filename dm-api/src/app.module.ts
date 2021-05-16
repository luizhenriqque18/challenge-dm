import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Device } from './device/device.model';
import { DeviceModule } from './device/device.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'device-management',
      models: [Device, Category],
      define: {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
      },  
    }),
    DeviceModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
