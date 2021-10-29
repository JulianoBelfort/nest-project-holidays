import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidaysModule } from './holidays/holidays.module';

typeOrmConfig;
//é possível adicionar 4 elementos aqui: controllers, imports, exports e providers
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), HolidaysModule],
})
export class AppModule {}
