import { Repository } from 'typeorm';
import { MatchOrder, DepositOrder } from '../orders.entity';
export declare class DepositService {
    private depositOrderRepository;
    private matchOrderRepository;
    constructor(depositOrderRepository: Repository<DepositOrder>, matchOrderRepository: Repository<MatchOrder>);
    findAll(page: number, pageSize: number, filter: any): Promise<{
        total: number;
        data: DepositOrder[];
        page: number;
        pageSize: number;
    }>;
}
