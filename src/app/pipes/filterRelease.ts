import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterRelease' })
export class FilterRelease implements PipeTransform {
    transform(value, args: string[]): any {
        let keys = [];
        for (let key in value) {
            keys.push({ key: value[key].release, value: Object.keys(value[key].sprints).length, id: value[key].id_release });
        }
        return keys;
    }
}