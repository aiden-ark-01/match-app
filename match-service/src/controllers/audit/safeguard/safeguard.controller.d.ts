import { SafeguardService } from './safeguard.service';
export declare class SafeguardController {
    private readonly safeguardService;
    constructor(safeguardService: SafeguardService);
    safeguardList(body: any): Promise<{
        page: number;
        pageSize: number;
        total: number;
        data: {
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
        }[];
    }>;
}
