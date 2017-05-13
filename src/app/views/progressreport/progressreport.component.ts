import { Component, Inject } from '@angular/core';
import { ReportService } from '../../services/report.service';
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
    
    constructor(
        private _progresReportService: ReportService

    )
     {
        this.showAssigmentTaskByUser();
    }
     options: Object;


      showAssigmentTaskByUser() {
        this._progresReportService.assigmentTaskByUser(1).subscribe(
            data => {
                for (var d in data){
                    data[d].data = [data [d].data];
                }

                this.options = {
                    chart : { type : 'column'},
                    title : { text : 'Reporte de Avances' },
                    subtitle : { text : 'Proyecto: Precise Estimate'},
                    yAxis: { min: 0,
                            title: { text: 'Actividades Asignadas'}
                        },

                    series: data
                };
            },  
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }
}

