import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

import { SsrCookieService } from 'ngx-cookie-service-ssr'
import * as _ from 'ramda'

export const authenticationGuard: CanActivateFn = async () => {
  const router = inject(Router)
  const cookies = inject(SsrCookieService)

  const token = cookies.get('access_token')

  if (_.isEmpty(token)) {
    return await router.navigate(['sign-in'])
  }

  return true
}
