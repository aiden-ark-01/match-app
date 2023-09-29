import { BaseEntity } from 'typeorm';
export interface DepositOrderInterface {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    deposit_order: string;
    gid: number;
    mid: string;
    kind: number;
    m_order: string;
    user_name: string;
    bank: string;
    name: string;
    cardNo_last5: string;
    amount: number;
    expired_at: number;
    is_arrived: number;
    callback_url: string;
    callback_log: string;
}
export declare class DepositOrder extends BaseEntity implements DepositOrderInterface {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    deposit_order: string;
    gid: number;
    mid: string;
    kind: number;
    m_order: string;
    user_name: string;
    bank: string;
    name: string;
    cardNo_last5: string;
    amount: number;
    expired_at: number;
    is_arrived: number;
    callback_url: string;
    callback_log: string;
}
export interface WithdrawOrderType {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    withdraw_order: string;
    mid: string;
    gid: number;
    m_order: string;
    user_name: string;
    kind: number;
    bank: string;
    name: string;
    card_no: string;
    amount: number;
    done_amount: number;
    times: number;
    done_times: number;
    expired_at: number;
    callback_url: string;
    callback_log: string;
}
export declare class WithdrawOrder extends BaseEntity implements WithdrawOrderType {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    withdraw_order: string;
    mid: string;
    gid: number;
    m_order: string;
    user_name: string;
    kind: number;
    bank: string;
    name: string;
    card_no: string;
    amount: number;
    done_amount: number;
    times: number;
    done_times: number;
    expired_at: number;
    callback_url: string;
    callback_log: string;
}
export interface MatchOrderTypes {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    match_id: string;
    gid: number;
    way: number;
    withdraw_order: string;
    out_bank: string;
    out_name: string;
    out_card_no: string;
    deposit_order: string;
    in_bank: string;
    in_name: string;
    in_card_no: string;
    amount: number;
    upload_image: string;
    expired_at: number;
    is_deposited: number;
    is_arrived: number;
    check_at: number;
    check_by: string;
    arrived_at: number;
}
export declare class MatchOrder extends BaseEntity implements MatchOrderTypes {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    match_id: string;
    gid: number;
    way: number;
    withdraw_order: string;
    out_bank: string;
    out_name: string;
    out_card_no: string;
    deposit_order: string;
    in_bank: string;
    in_name: string;
    in_card_no: string;
    amount: number;
    upload_image: string;
    expired_at: number;
    is_deposited: number;
    is_arrived: number;
    arrived_at: number;
    check_at: number;
    check_by: string;
}
