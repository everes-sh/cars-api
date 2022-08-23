import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create.dto';
import { UpdateCarDto } from './dto/update.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  @InjectRepository(Car)
  private readonly repo: Repository<Car>;

  async getAll() {
    return await this.repo.find();
  }

  async getOne(id: number) {
    return await this.repo.findOneByOrFail({ id: id });
  }

  async create(data: CreateCarDto) {
    return await this.repo.save(data);
  }

  async update(id: number, data: UpdateCarDto) {
    const car = await this.repo.findOneByOrFail({ id: id });
    Object.assign(car, data);
    return await this.repo.save(car);
  }

  async remove(id: number) {
    const car = await this.repo.findOneByOrFail({ id: id });
    return await this.repo.delete(car);
  }
}
