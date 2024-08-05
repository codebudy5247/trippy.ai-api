import { ApiProperty } from '@nestjs/swagger';
import { Trip } from '@prisma/client';

export class TripEntity implements Trip {
  @ApiProperty()
  id: number;
    
  @ApiProperty()
  title: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
