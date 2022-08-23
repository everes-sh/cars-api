import { PickType, ApiProperty } from '@nestjs/swagger';
import { CreateCarDto } from './create.dto';

export class UpdateCarDto extends PickType(CreateCarDto, ['color', 'price'] as const) {
    @ApiProperty()
    color: string;
}
