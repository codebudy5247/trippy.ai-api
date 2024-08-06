import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, IsDate } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateTripDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  coverImage: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty()
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty()
  endDate: Date;
}
