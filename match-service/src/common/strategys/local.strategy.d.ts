import { TokenUser } from '@/controllers/users/users.entity';
import { UsersService } from '@/controllers/users/users.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(username: string): Promise<TokenUser>;
}
export {};
