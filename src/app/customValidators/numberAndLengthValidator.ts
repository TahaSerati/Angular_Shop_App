import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numberAndLengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!/^\d+$/.test(value) || value.length !== 11) {
      return { invalidNumberOrLength: true };
    }
    return null;
  };
}
