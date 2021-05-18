import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Device } from './device/device.model';
import { DeviceModule } from './device/device.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development']
    }),
    DeviceModule,
    CategoryModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      models: [Device, Category],
      define: {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
      },  
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
