import { HolidaysType } from '../holidays-type.enum';

export class HolidayDto {
  name: string;
  date: Date;
  type: HolidaysType;
}
