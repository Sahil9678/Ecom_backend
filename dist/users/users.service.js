"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const dashboardData_1 = require("../helper/dashboardData");
let UsersService = class UsersService {
    constructor(logger) {
        this.logger = logger;
    }
    create(createUserDto) {
        return 'This action adds a new user';
    }
    findAll() {
        return dashboardData_1.dashboardData;
    }
    findOne(id) {
        let filterdata = dashboardData_1.dashboardData.filter((elem) => elem.id === id);
        this.logger.log('Hello1 -', dashboardData_1.dashboardData.length);
        return filterdata;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [common_1.Logger])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map