import { Repository } from 'typeorm';
import { SearchUser, TokenUser, Users } from './users.entity';
import { getAllUserInfoReq } from './users.controller';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(page: number, pageSize: number, role: number, filter: Record<string, any>): Promise<getAllUserInfoReq>;
    findPassword(username: string): Promise<TokenUser>;
    findOne(key: string, value: string): Promise<SearchUser>;
    uidToUserInfo(uid: string): Promise<TokenUser>;
    update(uid: string, key: string, value: any): Promise<Users>;
    updateByUid(uid: string, obj: Record<string, any>): Promise<Users>;
    create(creatorRole: number, username: string, password: string, role: number, ip: string): Promise<SearchUser>;
    edit({ uid, ...params }: {
        uid: string;
        username?: string;
        password?: string;
        status?: number;
    }): Promise<string>;
}
