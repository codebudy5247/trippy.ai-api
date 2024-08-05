import { ApiProperty } from '@nestjs/swagger';
import { Trip } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class TripEntity implements Trip {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  createdById: string | null;

  @ApiProperty({ required: false, type: UserEntity })
  createdBy?: UserEntity;

  constructor({ createdBy, ...data }: Partial<TripEntity>) {
    Object.assign(this, data);

    if (createdBy) {
      this.createdBy = new UserEntity(createdBy);
    }
  }
}
