import { Component, forwardRef, Input } from '@angular/core'
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'

import { twMerge } from 'tailwind-merge'

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  value: string = ''

  disabled = false

  onChange: any = (value: any) => {}

  onTouched: any = () => {}

  @Input({ required: true })
  label: string = ''

  @Input({ required: true })
  name: string = ''

  @Input()
  type: string = 'text'

  @Input()
  placeholder: string = ''

  @Input()
  class: string = ''

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(is_disabled: boolean): void {
    this.disabled = is_disabled
  }

  getClass(): string {
    const default_classes =
      'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5'

    return twMerge(default_classes, this.class)
  }
}
