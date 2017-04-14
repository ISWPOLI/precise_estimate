import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterEpic' })
export class FilterEpic implements PipeTransform {
    transform(value, args: string[]): any {
        let keys = [];
        for (let key in value) {
            var nofeature = true;
            for (let f in value[key].features) {
                keys.push({ key: value[key].epic, value: value[key].features[f] });
                nofeature = false;
            }
            if (nofeature){
                keys.push({ key: value[key].epic, value: {} });
            }
        }
        return keys;
    }
}