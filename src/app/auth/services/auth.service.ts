import { Injectable, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { AuthApiService } from './api/auth-api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {

    isSubmitForm: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    disabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    submitSubject: Subject<void> = new Subject();

    private onDestroy$ = new Subject<boolean>();

    constructor(
        private authApi: AuthApiService
    ) { }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
        this.isSubmitForm.complete();
        this.disabled.complete();
        this.submitSubject.complete();
    }

    async validFormLogin(form: FormGroup) {
        if (form.invalid) return;
        return await this.authApi.login({
            nombreUsuario: form.get('email')?.value,
            password: form.get('password')?.value
        }).toPromise();
    }
    
    validFormRegister(form: FormGroup) {
        if (form.invalid) return;
        if (form.get('password')?.value != form.get('confirmPassword')?.value) return;
        if (!form.get('email')) return;
        this.authApi.register({
            email: form.get('email')?.value || '',
            nombreUsuario: form.get('usuario')?.value || '',
            password: form.get('password')?.value || '',
            roles: []
        }).pipe(takeUntil(this.onDestroy$), finalize(() => console.log('finalize'))).subscribe(data => {
            console.log(data);
        })
    }

    async validSendEmail(form: FormGroup) {
        if (form.invalid) return;
        return await this.authApi.existsByCorreo(form.get('email')?.value).toPromise().catch(() => false);
    }


}