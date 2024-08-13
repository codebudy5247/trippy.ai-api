import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

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

  @IsString()
  @IsOptional()
  // @IsNotEmpty()
  @ApiProperty()
  startDate: string;

  @IsString()
  @IsOptional()
  // @IsNotEmpty()
  @ApiProperty()
  endDate: string;

  // @IsDate()
  // @Type(() => Date)
  // @IsOptional()
  // @IsNotEmpty()
  // @ApiProperty()
  // startDate: Date;

  // @IsDate()
  // @Type(() => Date)
  // @IsOptional()
  // @IsNotEmpty()
  // @ApiProperty()
  // endDate: Date;
}
