import { ExecutionContext } from '@nestjs/common';
import { UsersService } from '@/controllers/users/users.service';
import { StrategysService } from './stategys.service';
declare const LocalAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class LocalAuthGuard extends LocalAuthGuard_base {
    constructor();
    handleRequest(err: any, user: any, info: any): any;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private readonly strategysService;
    private readonly usersService;
    constructor(strategysService: StrategysService, usersService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
