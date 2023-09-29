import { TestService } from './test.service';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    encrypt(req: any, body: any): Promise<string>;
    getKey(): Promise<string>;
    ping(): Promise<{
        code: number;
        msg: string;
    }>;
    getPing(): Promise<{
        code: number;
        msg: string;
    }>;
    qaWithdrawCreate(body: any): Promise<import("./test.service").result>;
    qaDepositCreate(body: any): Promise<import("./test.service").result>;
    qaConfirm(body: any): Promise<import("./test.service").result>;
}
