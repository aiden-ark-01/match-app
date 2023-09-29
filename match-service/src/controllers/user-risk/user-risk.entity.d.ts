export interface UserRiskTypes {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    user_name: string;
    mid: string;
    scores: number;
    spiteful: number;
    is_newbie: number;
    cumulative_amount: number;
    cumulative_times: number;
    third_part_times: number;
    least_random_percent: number;
    commonly_ips: string;
    commonly_devices: string;
}
export declare class UserRisk {
    id: number;
    state: number;
    created_at: number;
    updated_at: number;
    user_name: string;
    mid: string;
    scores: number;
    spiteful: number;
    is_newbie: number;
    cumulative_amount: number;
    cumulative_times: number;
    third_part_times: number;
    least_random_percent: number;
    commonly_ips: string;
    commonly_devices: string;
}
