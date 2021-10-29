import { Injectable, NotFoundException } from '@nestjs/common';
import { Holiday } from './holidays.entity';
import { HolidayDto } from './dto/create-holiday.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HolidayRepository } from './holidays.repository';

@Injectable()
export class HolidaysService {
  constructor(
    @InjectRepository(HolidayRepository)
    private holidayRepository: HolidayRepository,
  ) {}

  async getAllHolidays(): Promise<Holiday[]> {
    return await this.holidayRepository.find();
  }

  async getHolidayById(id: number): Promise<Holiday> {
    const found = await this.holidayRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Holiday ${id} not found`);
    }
    return found;
  }

  async createHoliday(holidayDto: HolidayDto): Promise<Holiday> {
    return await this.holidayRepository.createHoliday(holidayDto);
  }

  async deleteHolidayById(id: number): Promise<void> {
    const result = await this.holidayRepository.delete(id);

    if (!result) {
      throw new NotFoundException(`Holiday ${id} not found`);
    }
  }

  async updateHolidayById(id: number, holidayDto: HolidayDto): Promise<Holiday> {
    return await this.holidayRepository.updateHoliday(id, holidayDto);
  }
}
