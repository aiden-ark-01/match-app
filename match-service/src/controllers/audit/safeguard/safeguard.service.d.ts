import { Repository } from 'typeorm';
import { MatchOrder, WithdrawOrder } from '@/controllers/orders/orders.entity';
type SafeguardOrderTypes = {
    id: number;
    withdraw_order: string;
    created_at: number;
    done_amount: number;
    amount: number;
    m_order: string;
    expired_at: number;
    state: number;
    out_bank: string;
    out_name: string;
    out_card_no: string;
    upload_image: string;
};
export declare class SafeguardService {
    private withdrawOrderRepository;
    private matchOrderRepository;
    constructor(withdrawOrderRepository: Repository<WithdrawOrder>, matchOrderRepository: Repository<MatchOrder>);
    findAll(page: number, pageSize: number, filter: Record<string, any>): Promise<{
        page: number;
        pageSize: number;
        total: number;
        data: SafeguardOrderTypes[];
    }>;
}
export {};
