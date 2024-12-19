import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NonNullableFormBuilder,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule

} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { NgClass } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
email: any;
  loginsubmit() {
    throw new Error('Method not implemented.');
  }
  private readonly _Router = inject(Router);
  private readonly _AuthServiceService = inject(AuthServiceService);
  private readonly _formBuilder = inject(FormBuilder);
  msgSuccess: boolean = false;
  isLoading = false;
  msgError = '';

  LoginForm: FormGroup = this._formBuilder.group({
    username: [null, [Validators.required, Validators.email]],
    password: [   null, [Validators.required, Validators.pattern(/^\w{6,}$/)] ],
  });

  loginSubmit(form :FormGroup): void {
    if (this.LoginForm.invalid) {
      this.isLoading = true;
      this._AuthServiceService.setloginform(this.LoginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message == 'msgSuccess') {
            this.msgSuccess = true;
            setTimeout(() => {

              localStorage.setItem('userToken',res.token);
              this._AuthServiceService.saveuserData()
              this.isLoading = false;
              this._Router.navigate(['/profile']);
            }, 2000);
          }
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.msgError = err.error.message;
          console.log(err);
          this.isLoading = false;
        },
      });
    }
  }
}
