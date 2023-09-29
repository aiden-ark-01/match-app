import { JwtService } from '@nestjs/jwt';
export declare class StrategysService {
    private jwtService;
    constructor(jwtService: JwtService);
    verify(token: string): Promise<any>;
    sign(payload: {
        username: string;
        sub: string;
    }): Promise<string>;
}
