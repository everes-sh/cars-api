import { ApiProperty } from '@nestjs/swagger';
import { BodyType } from '../enums/type.enum';

export class CreateCarDto {
    @ApiProperty({ description: "Марка автомобиля", example: 'toyota' })
    brand: string;

    @ApiProperty({ description: "Год выпуска", example: 2010 })
    release_year: number;

    @ApiProperty({ description: "Цвет автомобиля", example: 'white' })
    color: string;

    @ApiProperty({ description: "Стоимость", example: 10000 })
    price: number;

    @ApiProperty({ description: "Тип кузова", example: BodyType.sedan })
    type: BodyType;
}
