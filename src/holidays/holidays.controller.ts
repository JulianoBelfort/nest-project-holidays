import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidayDto } from './dto/create-holiday.dto';
import { Holiday } from './holidays.entity';

@Controller('holidays')
export class HolidaysController {
  constructor(private holidaysService: HolidaysService) {}

  @Get()
  getAllHolidays() {
    return this.holidaysService.getAllHolidays();
  }

  @Post()
  createHoliday(@Body() holidayDto: HolidayDto) {
    return this.holidaysService.createHoliday(holidayDto);
  }

  @Get('/:id')
  getHolidayById(@Param('id') id: number): Promise<Holiday> {
    return this.holidaysService.getHolidayById(id);
  }

  @Delete('/:id')
  deleteHolidayById(@Param('id') id: number): Promise<void> {
    return this.holidaysService.deleteHolidayById(id);
  }

  @Patch('/:id')
  updateHolidayById(@Param('id') id: number, @Body() holidayDto: HolidayDto) {
    return this.holidaysService.updateHolidayById(id, holidayDto);
  }
}
