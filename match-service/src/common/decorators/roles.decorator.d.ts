import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class CheckRoleAdminGuard {
    canActivate(context: ExecutionContext): boolean;
}
export declare class CheckRoleRootGuard {
    canActivate(context: ExecutionContext): boolean;
}
export declare class CustomDecorator implements CanActivate {
    private role?;
    constructor(role?: number);
    canActivate(context: ExecutionContext): boolean;
}
