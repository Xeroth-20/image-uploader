import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class MyValidatorsService {

    constructor() { }

    public requiredFileType(type: string | string[]): Function {
        const error = {
            requiredFileType: true
        }

        return (formControl: FormControl) => {
            const file: File = formControl.value;
            console.log(file);

            if (file != null) {
                const extension = file.name.split('.')[1].toLowerCase();

                if (type instanceof Array) {
                    if (type.every(fileExtension => extension !== fileExtension)) return error;
                } else if (type.toLowerCase() !== extension) {
                    return error;
                }
            } else {
                return error;
            }

            return null;
        };
    }
}
