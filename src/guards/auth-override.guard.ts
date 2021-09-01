import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthOverrideGuard implements CanActivate {
    constructor() {
        console.log(`AuthOverrideGuard constructor()`);
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log(`AuthOverrideGuard canActivate()`);
        return false;
    }
}
