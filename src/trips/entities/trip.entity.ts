import { ApiProperty } from '@nestjs/swagger';
import { Trip } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class TripEntity implements Trip {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  coverImage: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  ownerId: string | null;

  @ApiProperty({ required: false, type: UserEntity })
  owner: UserEntity;

  constructor({ owner, ...data }: Partial<TripEntity>) {
    Object.assign(this, data);

    if (owner) {
      this.owner = new UserEntity(owner);
    }
  }
}
