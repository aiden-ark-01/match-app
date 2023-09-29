import { PlatformService } from './platform.service';
export declare class PlatformController {
    private readonly platformService;
    constructor(platformService: PlatformService);
    platformList(body: any): Promise<import("./types").MerchantRequestTypes>;
    createMerchant(body: any): Promise<any>;
    editMerchant(body: any): Promise<any>;
}
