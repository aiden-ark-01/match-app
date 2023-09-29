import { ExecutionContext } from '@nestjs/common';
export declare class EncryptParamGuard {
    canActivate(context: ExecutionContext): boolean;
}
export declare class DecryptParamGuard {
    canActivate(context: ExecutionContext): boolean;
}
