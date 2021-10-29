import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidaysController } from './holidays.controller';
import { HolidayRepository } from './holidays.repository';
import { HolidaysService } from './holidays.service';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayRepository])],
  controllers: [HolidaysController],
  providers: [HolidaysService],
})
export class HolidaysModule {}
