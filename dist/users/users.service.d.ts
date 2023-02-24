import { Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly logger;
    constructor(logger: Logger);
    create(createUserDto: CreateUserDto): string;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
