export interface SearchUser {
    username: string;
    uid: string;
    ip: string;
    role: number;
    createdAt: number;
}
export interface TokenUser extends SearchUser {
    token: string;
    status: number;
}
export declare class Users implements SearchUser {
    id: number;
    username: string;
    password: string;
    uid: string;
    ip: string;
    token: string;
    role: number;
    status: number;
    createdAt: number;
    lastLogin: number;
    lastLoginIp: string;
}
