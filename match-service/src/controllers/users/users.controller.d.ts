import { UsersService } from './users.service';
import { SearchUser } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOne(): Promise<SearchUser>;
    create(req: any, body: any): Promise<SearchUser>;
    edit(body: any): Promise<{
        edit: string;
    }>;
    getUserInfo(req: any): Promise<SearchUser>;
    getAllUserInfo(req: any, body: any): Promise<getAllUserInfoReq>;
}
export type getAllUserInfoReq = {
    data: SearchUser[];
    page: number;
    pageSize: number;
    total: number;
};
