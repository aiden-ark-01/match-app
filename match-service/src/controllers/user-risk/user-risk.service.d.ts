import { UserRisk, UserRiskTypes } from './user-risk.entity';
import { Repository } from 'typeorm';
export interface UserRiskRequestTypes {
    data: UserRiskTypes[];
    page: number;
    pageSize: number;
    total: number;
}
export declare class UserRiskService {
    private merchantRepository;
    constructor(merchantRepository: Repository<UserRisk>);
    findAll(page: number, pageSize: number, filter: any): Promise<UserRiskRequestTypes>;
}
