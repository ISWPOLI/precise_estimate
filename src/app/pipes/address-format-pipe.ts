import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addressFormat'
})

export class AddressFormatPipe implements PipeTransform {
    transform(value: string): string {
        // Checking if they passed in anything for sliceby so we know what to separate our list by.
        value.replace(/\\r/g, '<br>');
        let test: string = value.replace(/\\r/g, '  ');
        test = test.replace(/\"/g, '');
        return test;
    }
}