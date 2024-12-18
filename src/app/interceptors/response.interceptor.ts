import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'

import { catchError, throwError } from 'rxjs'

import { HotToastService } from '@ngxpert/hot-toast'

export const responseInterceptor: HttpInterceptorFn = (request, next) => {
  const toastService = inject(HotToastService)

  return next(request).pipe(
    catchError(({ error }: HttpErrorResponse) => {
      const error_message: string =
        error.message ?? 'We had an unexpected error'
      toastService.error(error_message)

      return throwError(() => error)
    }),
  )
}
