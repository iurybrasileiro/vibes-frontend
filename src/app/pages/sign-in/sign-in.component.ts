import { HttpClient } from '@angular/common/http'
import { Component, inject, signal } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'

import { SsrCookieService } from 'ngx-cookie-service-ssr'
import { finalize } from 'rxjs'

import { userStore } from '@src/app/stores/user/user.store'
import { User } from '@src/app/stores/user/user.type'

import { ButtonComponent } from '../../components/button/button.component'
import { ErrorMessageComponent } from '../../components/error-message/error-message.component'
import { InputComponent } from '../../components/input/input.component'

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  templateUrl: './sign-in.component.html',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    ErrorMessageComponent,
  ],
})
export class SignInComponent {
  readonly store = inject(userStore)

  constructor(
    private readonly httpClient: HttpClient,
    private readonly ssrCookiesService: SsrCookieService,
    private readonly router: Router,
  ) {}

  loading = signal(false)

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  async submitHandler(): Promise<void> {
    this.loading.set(true)

    this.httpClient
      .post<{
        access_token: string
        refresh_token: string
        user: User
      }>('/auth/sign-in', this.form.value)
      .pipe(
        finalize(() => {
          this.loading.set(false)
        }),
      )
      .subscribe(({ access_token, refresh_token, user }) => {
        this.ssrCookiesService.set('access_token', access_token)
        this.ssrCookiesService.set('refresh_token', refresh_token)

        this.store.updateUser(user)

        void this.router.navigate([''], { replaceUrl: true })
      })
  }
}
