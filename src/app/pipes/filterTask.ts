import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterTask' })
export class FilterTask implements PipeTransform {
    transform(value, id_feature: number, id_sprint: number, id_story: number): any {
        let keys = [];
        for (let key in value) {
            for (let f in value[key].features) {
                if (value[key].features[f].id_feature == id_feature) {
                    for (let s in value[key].features[f].stories) {
                        if (value[key].features[f].stories[s].id_sprint == id_sprint && value[key].features[f].stories[s].id_story == id_story) {
                            for (let t in value[key].features[f].stories[s].tasks) {
                                keys.push({ key: value[key].features[f].stories[s].tasks[t].task, value: value[key].features[f].stories[s].tasks[t] });
                            }
                        }
                    }
                }
            }
        }
        return keys;
    }
}