import { DepositService } from './deposit.service';
export declare class DepositController {
    private readonly depositService;
    constructor(depositService: DepositService);
    withdrawList(body: any): Promise<{
        total: number;
        data: import("../orders.entity").DepositOrder[];
        page: number;
        pageSize: number;
    }>;
}
