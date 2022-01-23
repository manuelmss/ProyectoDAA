import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnDestroy(): void {
    this.authService.disabled.next(false);
  }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  ngOnInit(): void {
    this.authService.disabled.next(true);
  }
  
  async searchEmail() {
    let data = await this.authService.validSendEmail(this.form);
    if (data == true) {
      this.authService.disabled.next(false);
    } else {
      this.authService.disabled.next(true);
    }
  }

}
