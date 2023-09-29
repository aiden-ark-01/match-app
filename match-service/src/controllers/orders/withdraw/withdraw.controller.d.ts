import { WithdrawService } from './withdraw.service';
export declare class WithdrawController {
    private readonly withdrawService;
    constructor(withdrawService: WithdrawService);
    withdrawList(body: any): Promise<{
        total: number;
        data: import("../orders.entity").WithdrawOrder[];
        page: number;
        pageSize: number;
    }>;
    matchInfo(body: any): Promise<import("../orders.entity").MatchOrder[]>;
}
