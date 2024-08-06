import { Injectable } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}
  create(createTripDto: CreateTripDto,userId: string) {
    return this.prisma.trip.create({ 
      data: {
        ...createTripDto,
        createdById: userId
      }
     });
  }

  findAll(userId: string) {
    return this.prisma.trip.findMany({
        where:{
          createdById:userId
        }
    });
  }

  findOne(id: number) {
    return this.prisma.trip.findUnique({
      where: { id },
      include: {
        createdBy: true,
      },
    });
  }

  update(id: number, updateTripDto: UpdateTripDto) {
    return this.prisma.trip.update({
      where: { id },
      data: updateTripDto,
    });
  }

  remove(id: number) {
    return this.prisma.trip.delete({ where: { id } });
  }
}
