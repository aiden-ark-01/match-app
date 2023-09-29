import { UsersService } from '../users/users.service';
import { SearchUser, Users } from '../users/users.entity';
import { StrategysService } from '@/common/strategys/stategys.service';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: StrategysService, usersService: UsersService);
    test(): Promise<string>;
    validateUser(username: string): Promise<SearchUser>;
    login(user: Users, ip: string): Promise<any>;
    loginOut(uid: string): Promise<any>;
}
