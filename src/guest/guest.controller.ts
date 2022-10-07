import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { getFilter } from './dtoentity/get.filter.dto';
import { createGuests, updateGuests } from './dtoentity/guest.dto';
import { GuestService } from './guest.service';

@Controller('guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Get()
  getAll(@Query() dto: getFilter) {
    return this.guestService.getByFilter(dto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.guestService.getById(id);
  }

  @Post()
  createGuest(@Body() dto: createGuests) {
    return this.guestService.create(dto);
  }

  @Put(':id')
  UpdateGuest(@Param('id') id: string, @Body() dto: updateGuests) {
    return this.guestService.update(id, dto);
  }

  @Delete(':id')
  deleteGuest(@Param('id') id: string) {
    return this.guestService.delete(id);
  }
}
