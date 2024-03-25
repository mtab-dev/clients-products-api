import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LogService } from './log.service';

@Injectable()
export class LogInterceptor implements NestInterceptor {
    constructor(private readonly logService: LogService){}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any>{

        const req = context.switchToHttp().getRequest();
        const clientData = req.body;

        return next.handle().pipe(tap(() => {this.logService.logCreate(clientData)}))
    }

}