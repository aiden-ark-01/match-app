export interface MerchantTypes {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    mid: string;
    gid: number;
    m_name: string;
    secret_key: string;
    balance: number;
    least_scores: number;
    least_newbie: number;
    least_over_percent: number;
    most_over_percent: number;
    max_withdraw_amount: number;
    expired_at: string;
    callback_url: string;
}
export declare class Merchant {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    mid: string;
    gid: number;
    m_name: string;
    secret_key: string;
    balance: number;
    least_scores: number;
    least_newbie: number;
    least_over_percent: number;
    most_over_percent: number;
    max_withdraw_amount: number;
    expired_at: string;
    callback_url: string;
}
