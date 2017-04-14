import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterStory' })
export class FilterStory implements PipeTransform {
    transform(value, id_feature: number, id_sprint: number): any {
        let keys = [];
        for (let key in value) {
            for (let f in value[key].features) {
                if (value[key].features[f].id_feature == id_feature) {
                    for (let s in value[key].features[f].stories) {
                        if (value[key].features[f].stories[s].id_sprint == id_sprint) {
                            keys.push({ key: value[key].features[f].stories[s].story, value: value[key].features[f].stories[s] });
                        }
                    }
                }
            }
        }
        return keys;
    }
}