import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'resourcereport',
     styles: [`
      chart {
        display: block;
      }
    `],
    template: '<chart [options]="options"></chart>'
})

export class ResourcereportComponent {
    constructor() {
        this.options = {
            title : { text : 'Reporte de Recursos' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
     options: Object;
}
