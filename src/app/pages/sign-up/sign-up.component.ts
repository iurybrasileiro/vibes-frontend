import { HttpClient } from '@angular/common/http'
import { Component, signal } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'

import { finalize } from 'rxjs'

import { HotToastService } from '@ngxpert/hot-toast'
import { ButtonComponent } from '@src/app/components/button/button.component'
import { ErrorMessageComponent } from '@src/app/components/error-message/error-message.component'
import { InputComponent } from '@src/app/components/input/input.component'
import { birthdateGreaterThanValidator } from '@src/app/validators/bithdate-greater-than.validator'
import { passwordConfirmationValidator } from '@src/app/validators/password-confirmation.validator'

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  templateUrl: './sign-up.component.html',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    ErrorMessageComponent,
  ],
})
export class SignUpComponent {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private readonly toastService: HotToastService,
  ) {}

  loading = signal(false)

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [
      Validators.required,
      birthdateGreaterThanValidator(18),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      passwordConfirmationValidator(),
    ]),
    termsAndConditions: new FormControl('', [Validators.required]),
  })

  async submitHandler(): Promise<void> {
    this.loading.set(true)

    this.httpClient
      .post<{ message: string }>('/users', {
        name: this.form.value.name,
        birthdate: this.form.value.birthdate,
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .pipe(
        finalize(() => {
          this.loading.set(false)
        }),
      )
      .subscribe(({ message }) => {
        this.toastService.success(message, {
          duration: 4000,
        })
        this.form.reset()

        void this.router.navigate(['sign-in'])
      })
  }
}
