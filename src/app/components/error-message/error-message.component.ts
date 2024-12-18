import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-error-message',
  standalone: true,
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  @Input()
  show_message: boolean = false

  @Input({ required: true })
  message: string = ''
}
