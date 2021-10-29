import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { HolidayDto } from './dto/create-holiday.dto';
import { Holiday } from './holidays.entity';

@EntityRepository(Holiday)
export class HolidayRepository extends Repository<Holiday> {
  async createHoliday(holidayDto: HolidayDto): Promise<Holiday> {
    const { name, date, type } = holidayDto;
    const holiday = new Holiday();
    holiday.name = name;
    holiday.date = date;
    holiday.type = type;
    await holiday.save();
    return holiday;
  }

  async updateHoliday(id: number, holidayDto: HolidayDto): Promise<Holiday> {
    const { name, date, type } = holidayDto;
    const updateHoliday = await this.findOne(id);
    if (!updateHoliday) {
      throw new NotFoundException(`Holiday ${id} not found`);
    }

    if (name != null && typeof name != 'undefined') updateHoliday.name = name;
    if (date != null && typeof date != 'undefined') updateHoliday.date = date;
    if (type != null && typeof type != 'undefined') updateHoliday.type = type;
    return await updateHoliday.save();
  }
}
