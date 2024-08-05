import { ApiProperty } from '@nestjs/swagger';

export class CreateTripDto {
  @ApiProperty()
  title: string;
}
