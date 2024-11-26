import { Component, EventEmitter, Input, Output } from '@angular/core'

import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { SpinnerComponent } from '../spinner/spinner.component'
import { TButtonKinds } from './button.types'

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [SpinnerComponent],
})
export class ButtonComponent {
  @Input({ required: true })
  label: string = ''

  @Input()
  loading: boolean = false

  @Input()
  type: string = 'button'

  @Input()
  class?: string = ''

  @Input()
  kind?: TButtonKinds = 'solid'

  @Input()
  disabled?: boolean = false

  @Output()
  click = new EventEmitter<void>()

  onClick(): void {
    this.click.emit()
  }

  getClass(): string {
    const variantes = tv({
      base: twMerge(
        'w-full h-12 ease-in duration-200 font-bold rounded-full text-sm px-8 py-2.5 outline-none flex flex-row items-center justify-center text-white',
        this.class,
      ),
      variants: {
        kind: {
          solid:
            'bg-teal-600 hover:bg-teal-700 text-white disabled:bg-gray-200',
          outline:
            'bg-transparent border border-teal-600 text-teal-600 hover:border-teal-700 hover:text-teal-700 disabled:border-gray-200 disabled:text-gray-200',
          invisible:
            'bg-transparent text-teal-600 underline px-0 py-0 h-auto disabled:text-gray-200 w-fit',
        },
      },
      defaultVariants: {
        kind: 'solid',
      },
    })

    return variantes({ kind: this.kind })
  }
}
