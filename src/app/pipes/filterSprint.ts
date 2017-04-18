import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterSprint' })
export class FilterSprint implements PipeTransform {
    transform(value, args: string[]): any {
        let keys = [];
        for (let key in value) {
            for (let f in value[key].sprints) {
                keys.push({ key: value[key].release, value: value[key].sprints[f], id: value[key].id_release });
            }
        }
        return keys;
    }
}