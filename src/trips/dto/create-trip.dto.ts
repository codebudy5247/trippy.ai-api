import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsDate } from 'class-validator';

export class CreateTripDto {
  @IsString()
  @IsOptional()
  // @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  // @IsNotEmpty()
  @ApiProperty()
  coverImage: string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  // @IsNotEmpty()
  @ApiProperty()
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  // @IsNotEmpty()
  @ApiProperty()
  endDate: Date;
}
