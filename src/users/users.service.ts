import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { dashboardData } from '../helper/dashboardData'

@Injectable()
export class UsersService {
  constructor(private readonly logger: Logger) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return dashboardData;
  }

  findOne(id: number) {
    let filterdata = dashboardData.filter((elem: any) => elem.id === id)
    this.logger.log('Hello1 -', dashboardData.length)
    return filterdata;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
