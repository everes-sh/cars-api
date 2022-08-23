import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create.dto';
import { UpdateCarDto } from './dto/update.dto';
import { Car } from './entities/car.entity';

@ApiTags('Автомобиль')
@Controller('cars')
export class CarsController {
  constructor(private readonly service: CarsService) {}

  @ApiOperation({ summary: 'получить список автомобилей' })
  @ApiResponse({ type: [Car] })
  @Get()
  getAll() {
    return this.service.getAll();
  }

  @ApiOperation({ summary: 'получить автомобиль по его айди' })
  @ApiParam({ name: 'id', description: 'айди автомобиля' })
  @ApiResponse({ type: Car })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.service.getOne(+id);
  }

  @ApiOperation({ summary: 'создать новый автомобиль' })
  @ApiBody({ type: CreateCarDto })
  @ApiResponse({ type: Car })
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.service.create(createCarDto);
  }

  @ApiOperation({ summary: 'обновить данные об автомобиле' })
  @ApiParam({ name: 'id', description: 'айди автомобиля' })
  @ApiBody({ type: UpdateCarDto })
  @ApiResponse({ type: Car })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCarDto: UpdateCarDto) {
    return this.service.update(+id, updateCarDto);
  }

  @ApiOperation({ summary: 'удалить автомобиль по его айди' })
  @ApiParam({ name: 'id', description: 'айди автомобиля' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
