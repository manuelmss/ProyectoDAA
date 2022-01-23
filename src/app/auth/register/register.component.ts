import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSubmitted$: Observable<boolean> = this.authService.isSubmitForm.asObservable();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  form = this.fb.group({
    usuario: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]]
  });

  get email() {
    return this.form.get('email');
  }

  ngOnInit(): void {
    this.authService.submitSubject.asObservable().subscribe(
      () => {
        this.authService.validFormRegister(this.form);
      }
    );
  }

}
