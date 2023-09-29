import { UserRiskService } from './user-risk.service';
export declare class UserRiskController {
    private readonly userRiskService;
    constructor(userRiskService: UserRiskService);
    platformList(body: any): Promise<import("./user-risk.service").UserRiskRequestTypes>;
}
