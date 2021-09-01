import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard  implements CanActivate {
    constructor() {
        console.log(`AuthGuard constructor()`);
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.warn(`AuthGuard canActivate()`);
        return true;
    }
}
