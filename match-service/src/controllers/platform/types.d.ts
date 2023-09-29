import { MerchantTypes } from './platform.entity';
export interface MerchantRequestTypes {
    data: MerchantTypes[];
    page: number;
    pageSize: number;
    total: number;
}
