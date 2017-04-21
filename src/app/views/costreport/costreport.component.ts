import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'costreports',
    styles: [`
      chart {
        display: block;
      }
    `],
    template: '<chart [options]="options"></chart>'
})
export class CostreportComponent {
    
    public form: FormGroup;
    
    constructor() {
        this.options = {
            chart : { 
                    type : 'pie',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: null
                 },
            title : { text : 'Reporte de Avances' },
            subtitle : { text : 'Proyectos creados hasta la fecha'},
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
            plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },

            series: [{
                name: 'Proyectos',
                colorByPoint: true,
                data: [{
                name: 'Presice Estimate',
                y: 56.33
            }, {
                name: 'Test',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Test1',
                y: 10.38,
                sliced: true,
            }, {
                name: 'Poli Booking',
                y: 4.77,
                sliced: true,
            }, {
                name: 'Bibliogame',
                y: 0.91,
                sliced: true,
            }, {
                name: 'Gimnasio y bibliotecas',
                y: 0.2,
                sliced: true,
            }]
            }]
        };
    }
     options: Object;
}
