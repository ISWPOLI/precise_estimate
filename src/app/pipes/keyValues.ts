import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keyValues' })
export class KeysPipe implements PipeTransform {
    transform(value, args: string[]): any {
        let keys = [];
        for (let key in value) {
            if (('visible' in value[key] && value[key].visible) || !('visible' in value[key])){
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
}