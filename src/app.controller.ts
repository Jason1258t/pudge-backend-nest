import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  async findAll(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }
}
