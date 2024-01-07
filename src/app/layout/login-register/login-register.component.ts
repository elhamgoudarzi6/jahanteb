import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../auth/local-storage.service';
import { NgxSpinnerService } from "ngx-spinner";
import { LayoutService } from './../layout.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  providers: [MessageService]
})
export class LoginRegisterComponent implements OnInit {
  @ViewChild('ngOtpInput', { static: true }) ngOtpInputRef: any;
  loginForm: FormGroup | any;
  registerForm: FormGroup | any;
  mobileRegix = /^0?9[123]\d{8}$/;
  passwordRegix = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{9,}$/;
  display: boolean = false;
  displayForgetPassword: boolean = false;
  forgetPasswordMobile: string | any;
  public getCodeSmS: string | any;
  otdCode: '' | any;
  loginErrorMessages = {
    mobile: [
      { type: 'required', message: 'شماره موبایل را وارد کنید.' },
      { type: 'minlength', message: 'شماره موبایل باید 11 رقم باشد.' },
      { type: 'maxlength', message: 'شماره موبایل باید 11 رقم باشد.' },
      { type: 'pattern', message: 'لطفا شماره موبایل معتبر وارد کنید.' }
    ],
    password: [
      { type: 'required', message: 'کلمه عبور را وارد کنید.' }
    ]
  };
  public invalidSMS: boolean = false;
  public timeLeft: number = 80;
  public interval: string | number | NodeJS.Timeout | undefined;
  resendSMS: boolean = false;
  registerErrorMessages = {
    mobile: [
      { type: 'required', message: 'شماره موبایل را وارد کنید.' },
      { type: 'minlength', message: 'شماره موبایل باید 11 رقم باشد.' },
      { type: 'maxlength', message: 'شماره موبایل باید 11 رقم باشد.' },
      { type: 'pattern', message: 'لطفا شماره موبایل معتبر وارد کنید.' }
    ],
    password: [
      { type: 'required', message: 'کلمه عبور را وارد کنید.' },
      { type: 'minlength', message: 'کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد.' },
      { type: 'pattern', message: 'کلمه عبور باید شامل حروف کوچک و بزرگ لاتین و اعداد و اشکال باشد..' }
    ],
    confirmPassword: [
      { type: 'required', message: 'تکرار کلمه عبور را وارد کنید.' },
      { type: 'minlength', message: 'تکرار کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد.' }
    ],
  };
  public validationBtnPay: boolean = true;

  constructor(private formBuilder: FormBuilder,
    private authService: LayoutService,
    private messageService: MessageService,
    private localStorage: LocalStorageService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.registerForm = this.formBuilder.group(
      {
        mobile: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern(this.mobileRegix)
          ])
        ),
        password: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(this.passwordRegix)
          ])
        ),
        confirmPassword: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(8)
          ])
        ),
      }, {
      //  validators: this.password.bind(this)
    });

    this.loginForm = this.formBuilder.group(
      {
        mobile: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern(this.mobileRegix)
          ])
        ),
        password: new FormControl(
          null,
          Validators.compose([
            Validators.required
          ])
        )
      }
    );
  }

  // password(formGroup: FormGroup): any {
  //   const {value: password} = formGroup.get('password');
  //   const {value: confirmPassword} = formGroup.get('confirmPassword');
  //   return password === confirmPassword ? null : {passwordNotMatch: true};
  // }

  login(): void {
    // this.spinner.show()
    this.authService.loginUser(this.loginForm.value).subscribe((response: any) => {
      if (response['success'] === true) {
        // this.spinner.hide()
        this.localStorage.removeCurrentUser();
        this.localStorage.saveCurrentUser(JSON.stringify(response.data));
        this.router.navigateByUrl('/user/panel');
      } else {
        // this.spinner.hide()
        this.messageService.add({ severity: 'error', summary: ' ورود ', detail: response['data'] });
      }
    });
  }

  register(): void {
    this.authService.registerUser(this.registerForm.value).subscribe((response: any) => {
      if (response['success'] === true) {
        // this.display = false;
        this.messageService.add({ severity: 'success', summary: 'موفق ', detail: response['data'] });
        this.localStorage.saveCurrentUser(JSON.stringify(this.registerForm.value));
        this.router.navigateByUrl('/');
      } else {
        // this.display = false;
        this.messageService.add({ severity: 'error', summary: 'ناموفق ', detail: response['data'] });
      }
    });
  }

  onOtpChange(otp: any) {
    this.otdCode = otp;
    if (this.otdCode.length === 6) {
      if (this.otdCode !== this.getCodeSmS) {
        this.invalidSMS = true;
        this.validationBtnPay = true;
      } else {
        this.invalidSMS = false;
        this.validationBtnPay = false;
      }
    }
  }

  showDialog() {
    this.display = true;
  }

  showDialogForgetPassword() {
    this.displayForgetPassword = true;
  }

  startTimer() {
    this.interval = 70;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.resendSMS = true;
        this.timeLeft = 0;
      }

    }, 1000);
  }

  randomNumber() {
    var text = '';
    var possible = '123456789';
    for (var i = 0; i < 6; i++) {
      var sup = Math.floor(Math.random() * possible.length);
      text += i > 0 && sup == i ? '0' : possible.charAt(sup);
    }
    return text;
  }

  resetPassword() {
    let data = {
      mobile: this.forgetPasswordMobile
    };
    this.authService.resetPasswordUser(data).subscribe((response: any) => {
      if (response['success'] === true) {
        this.messageService.add({
          severity: 'success',
          summary: 'موفق ',
          detail: response['newpass'] + 'پسورد جدید شما:'
        });
      }
    });
  }


}
