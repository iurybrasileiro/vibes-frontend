import { Component, forwardRef, Input } from '@angular/core'
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'

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
  name: HTMLInputElement['name'] = ''

  @Input()
  type: HTMLInputElement['type'] = 'text'

  @Input()
  placeholder: HTMLInputElement['placeholder'] = ''

  @Input()
  autocomplete: HTMLInputElement['autocomplete'] = ''

  @Input()
  class: HTMLInputElement['className'] = ''

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
}
