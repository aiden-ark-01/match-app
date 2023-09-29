import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    test(req: any): Promise<string>;
    login(req: any): Promise<any>;
    loginOut(req: any): Promise<any>;
}
