import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { Merchant } from '../platform/platform.entity';
import { DepositOrder } from '../orders/orders.entity';
export type params = {
    mid: string;
    [key: string]: any;
};
export type RequestParams = {
    mid: string;
    params: string;
};
export type result = {
    code: number;
    msg: string;
    data: any;
};
export declare class TestService {
    private readonly httpService;
    private readonly configService;
    private depositOrderRepository;
    private merchantRepository;
    apiUrl: string;
    constructor(httpService: HttpService, configService: ConfigService, depositOrderRepository: Repository<DepositOrder>, merchantRepository: Repository<Merchant>);
    findAll(): string;
    formatParams(data: params): Promise<RequestParams>;
    post(url: string, params: params, config?: any): Promise<result>;
    qaWithdrawCreate(params: params): Promise<result>;
    qaDepositCreate(params: params): Promise<result>;
    qaUpload(params: params): Promise<result>;
    qaConfirmOrder(params: params): Promise<result>;
    qaConfirm(params: {
        data: string;
        m_order: string;
    }): Promise<result>;
}
