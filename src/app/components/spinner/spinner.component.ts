import { Component, Input } from '@angular/core'

import { twMerge } from 'tailwind-merge'

@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  @Input()
  class?: string = ''

  getClass(): string {
    const default_class = 'size-6'

    return twMerge(default_class, this.class)
  }
}
