import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';
import { GlobalState } from "../../global.state";
import { LocalStorageService } from 'ngx-localstorage';
import { ToastrService } from 'ngx-toastr';
import { BaThemeSpinner } from '../../theme/services';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})

export class Login implements OnInit {
  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  submitted: boolean = false;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private globalState: GlobalState,
    private localStorage: LocalStorageService,
    private toastrService: ToastrService,
    protected _spinner: BaThemeSpinner,
  ) {
    this.form = fb.group({
      'email': ['', Validators.compose(
        [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      ],
      'password': ['', Validators.compose([Validators.required])],
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() { }

  onSubmit(values: any) {
    this.submitted = true;
    if (this.form.valid) {
      this.login(values);
    }
  }

  login(loginForm: any) {
    this._spinner.show();

    this.auth.login(loginForm)
      .subscribe({
        next: (res: any) => {
          this._spinner.hide();
          const data = res.json();
          console.log('loginSuccess: ', res);
          this.globalState.notifyDataChanged('session', res.json());
          this.localStorage.set('session', JSON.stringify(res.json()));
            this.router.navigateByUrl('pages/inicio/actividades');
        },
        error: (err: any) => {
          this._spinner.hide();
          const error = err.json();
          console.log('loginError: ', err);
          this.toastrService.error(error.detail || 'An error has ocurred');
        },
        complete: () => {},
      });
  }
}
