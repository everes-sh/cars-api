import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { BodyType } from '../enums/type.enum';

@Entity({ name: 'cars' })
export class Car {
  @ApiProperty({ description: "Айди автомобиля", example: 1 })
  @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: "Марка автомобиля", example: 'toyota' })
    @Column({ nullable: false })
    brand: string;

    @ApiProperty({ description: "Год выпуска", example: 2010 })
    @Column({ type: 'smallint', nullable: false })
    release_year: number;

    @ApiProperty({ description: "Цвет автомобиля", example: 'white' })
    @Column({ nullable: true })
    color: string;

    @ApiProperty({ description: "Стоимость", example: 10000 })
    @Column({ default: 0 })
    price: number;

    @ApiProperty({ description: "Тип кузова", example: BodyType.sedan })
    @Column({ type: 'smallint', default: BodyType.sedan })
    type: BodyType;
}
