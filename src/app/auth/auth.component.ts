import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogin: boolean = false;
  isRegister: boolean = false;
  isReset: boolean = false;

  disabled$: Observable<boolean> = this.authService.disabled.asObservable();

  @ViewChild(RouterOutlet) outlet!: RouterOutlet;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
          this.isLogin = data.url.includes('login');
          this.isRegister = data.url.includes('register');
          this.isReset = data.url.includes('reset');
      }
    })
  }

  ngOnInit(): void {
    this.isLogin = this.router.url.includes('login');
    this.isRegister = this.router.url.includes('register');
    this.isReset = this.router.url.includes('reset');
  }

  onSubmit(component: string) {
    this.authService.submitSubject.next();
    this.authService.isSubmitForm.next(true);
  }
}
