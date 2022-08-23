import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_CONFIG } from "./utils/db_config";
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [ TypeOrmModule.forRoot(DB_CONFIG), CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
