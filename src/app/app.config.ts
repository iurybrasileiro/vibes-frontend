import {
  withFetch,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http'
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'

import { provideHotToastConfig } from '@ngxpert/hot-toast'

import { routes } from './app.routes'
import { responseInterceptor } from './interceptors/response.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHotToastConfig({
      position: 'top-right',
    }),
    provideHttpClient(withInterceptors([responseInterceptor]), withFetch()),
  ],
}
