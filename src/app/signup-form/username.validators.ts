import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {


    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('OK');
                if (control.value === 'ashit') {
                    resolve( { shouldBeUnique: true });
    
                } else {
                    resolve (null);
                }
    
            }, 2000);

        });

    }
}