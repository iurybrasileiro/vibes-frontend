import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

import { subYears, isBefore } from 'date-fns'
import { isNil } from 'ramda'

export function birthdateGreaterThanValidator(minAge: number): ValidatorFn {
  return (
    control: AbstractControl<string | null | undefined>,
  ): ValidationErrors | null => {
    const birthdate = control.value

    if (isNil(birthdate)) {
      return null
    }

    const minBirthdate = subYears(new Date(), minAge)
    const isAgeGreaterThan = isBefore(new Date(birthdate), minBirthdate)

    return isAgeGreaterThan ? null : { birthdateGreaterThan: true }
  }
}
