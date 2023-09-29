import { Merchant } from './platform.entity';
import { Repository } from 'typeorm';
import { MerchantRequestTypes } from './types';
export declare class PlatformService {
    private merchantRepository;
    constructor(merchantRepository: Repository<Merchant>);
    findAll(page: number, pageSize: number, filter: any): Promise<MerchantRequestTypes>;
    findOneByMidAndMname(mid: string, m_name: string): Promise<any>;
    createMerchant(rest: any): Promise<any>;
    editMerchant(rest: any): Promise<any>;
}
