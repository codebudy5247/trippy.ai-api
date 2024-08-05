import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { TripEntity } from './entities/trip.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('trips')
@ApiTags('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  @ApiCreatedResponse({ type: TripEntity })
  create(@Body() createTripDto: CreateTripDto) {
    return this.tripsService.create(createTripDto);
  }

  @Get()
  @ApiOkResponse({ type: TripEntity, isArray: true })
  findAll() {
    return this.tripsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TripEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const trip = await this.tripsService.findOne(id);
    if (!trip) {
      throw new NotFoundException(`Trip with ID ${id} does not exist.`);
    }

    return trip;
  }

  @Patch(':id')
  @ApiOkResponse({ type: TripEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTripDto: UpdateTripDto,
  ) {
    return this.tripsService.update(id, updateTripDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TripEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tripsService.remove(id);
  }
}
