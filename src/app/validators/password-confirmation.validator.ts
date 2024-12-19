import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function passwordConfirmationValidator(): ValidatorFn {
  return (
    control: AbstractControl<string | null | undefined>,
  ): ValidationErrors | null => {
    const passwordConfirmation = control.value
    const password = control.parent?.get<string>('password')?.value ?? ''

    const isPasswordEquals = passwordConfirmation === password

    return isPasswordEquals ? null : { passwordDoesntMatch: true }
  }
}
