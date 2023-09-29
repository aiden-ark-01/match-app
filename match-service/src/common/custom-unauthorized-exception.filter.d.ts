import { ExceptionFilter, UnauthorizedException, ArgumentsHost } from '@nestjs/common';
export declare class CustomUnauthorizedExceptionFilter implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost): void;
}
