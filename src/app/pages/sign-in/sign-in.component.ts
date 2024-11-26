import { Component } from '@angular/core'

import { ButtonComponent } from '../../components/button/button.component'

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  templateUrl: './sign-in.component.html',
  imports: [ButtonComponent],
})
export class SignInComponent {}
