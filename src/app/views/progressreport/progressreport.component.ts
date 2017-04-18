import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'progressreport',
    styles: [`
      chart {
        display: block;
      }
    `],
    template: '<chart [options]="options"></chart>'
})
export class ProgressreportComponent {
    
    constructor() {
        this.options = {
            chart : { type : 'column'},
            title : { text : 'Reporte de Avances' },
            subtitle : { text : 'Proyecto: Precise Estimate'},
            yAxis: { min: 0,
                    title: {
                        text: 'Actividades Cerradas'
                    }
                },

            series: [{
                name: 'Sprint 1',
                data: [1, 2, 3, 10, 5, 8, 4, 12, 9, 15],
            },
            {
                name: 'Sprint 2',
                data: [6, 5, 2, 8, 15, 21, 3, 6, 1, -2],
            }
            
            ]
        };
    }
     options: Object;
}
