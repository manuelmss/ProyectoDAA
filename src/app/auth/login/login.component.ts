import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isSubsmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
    this.isSubsmitted = this.authService.isSubmitForm.value;
    this.authService.submitSubject.asObservable().subscribe(
      () => {
        this.authService.validFormLogin(this.form).then(() => {
          this.router.navigateByUrl("/base")
        })
      }
    )
  }

}
