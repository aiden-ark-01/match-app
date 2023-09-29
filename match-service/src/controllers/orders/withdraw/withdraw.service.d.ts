import { MatchOrder, WithdrawOrder } from '../orders.entity';
import { Repository } from 'typeorm';
export declare class WithdrawService {
    private withdrawOrderRepository;
    private matchOrderRepository;
    constructor(withdrawOrderRepository: Repository<WithdrawOrder>, matchOrderRepository: Repository<MatchOrder>);
    findMatchByWithdrawOrder(withdrawOrder: string): Promise<MatchOrder[]>;
    findAll(page: number, pageSize: number, filter: any): Promise<{
        total: number;
        data: WithdrawOrder[];
        page: number;
        pageSize: number;
    }>;
}
