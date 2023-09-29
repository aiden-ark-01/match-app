import { ApprovalService } from './approval.service';
export declare class ApprovalController {
    private readonly approvalService;
    constructor(approvalService: ApprovalService);
    list(body: any): Promise<{
        total: number;
        data: import("./approval.service").ApprovalOrderTypes[];
        page: number;
        pageSize: number;
    }>;
    pass(req: any, body: any): Promise<{
        code: number;
        msg: string;
    }>;
    refuse(req: any, body: any): Promise<{
        code: number;
        msg: string;
    }>;
}
