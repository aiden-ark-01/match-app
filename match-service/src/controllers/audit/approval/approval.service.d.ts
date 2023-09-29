import { MatchOrder, DepositOrder, WithdrawOrder, DepositOrderInterface, MatchOrderTypes, WithdrawOrderType } from '@/controllers/orders/orders.entity';
import { Merchant } from '@/controllers/platform/platform.entity';
import { UserRisk } from '@/controllers/user-risk/user-risk.entity';
import { EntityManager, Repository } from 'typeorm';
export type ApprovalOrderTypes = {
    id: number;
    deposit_order: string;
    created_at: number;
    m_order: string;
    user_name: string;
    state: number;
    amount: number;
    is_arrived: number;
    check_by: number;
    withdraw_order: string;
    out_bank: string;
    out_name: string;
    out_card_no: string;
    in_bank: string;
    in_name: string;
    in_card_no: string;
    upload_image: string;
};
export declare class ApprovalService {
    private depositOrderRepository;
    private matchOrderRepository;
    private withdrawOrderRepository;
    private userRiskRepository;
    private merchantRepository;
    private readonly entityManager;
    constructor(depositOrderRepository: Repository<DepositOrder>, matchOrderRepository: Repository<MatchOrder>, withdrawOrderRepository: Repository<WithdrawOrder>, userRiskRepository: Repository<UserRisk>, merchantRepository: Repository<Merchant>, entityManager: EntityManager);
    findAll(page: number, pageSize: number, filters: Record<string, any>): Promise<{
        total: number;
        data: ApprovalOrderTypes[];
        page: number;
        pageSize: number;
    }>;
    transaction: <T>(callBack: any) => Promise<T>;
    passHandle({ entityManager, depositOrder, matchOrder, withdrawOrder, user, end, }: {
        entityManager: any;
        depositOrder: DepositOrderInterface;
        matchOrder: MatchOrderTypes;
        withdrawOrder: WithdrawOrderType;
        user: any;
        end?: boolean;
    }): Promise<boolean>;
    pass(deposit_order: string, user: any): Promise<boolean>;
    refuseHandle({ entityManager, depositOrder, matchOrder, user, }: {
        entityManager: EntityManager;
        depositOrder: DepositOrder;
        matchOrder: MatchOrder;
        user: any;
    }): Promise<boolean>;
    refuse(deposit_order: string, user: any): Promise<boolean>;
}
