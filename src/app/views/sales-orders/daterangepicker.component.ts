import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'my-daterangepicker',
  template: `
    <div class="form-group">
          <input daterangepicker
                (selected)="dateSelected($event)"
                [options]="pickerOptions" type="submit"
                [disabled]="disabled"
                value="{{datelabel}}"
                class="form-control btn btn-primary inputField"/>
        </div> 
    `,
  styleUrls: []
})

export class DaterangepickerComponent {

  @Output() selectedDate: EventEmitter<any> = new EventEmitter(false);

  public disabled: boolean;

  public pickerOptions: Object = {
    'showDropdowns': true,
    'showWeekNumbers': true,
    'timePickerIncrement': 5,
    'autoApply': true,
    'startDate': '04/27/2016',
    'endDate': '07/27/2016'
  };

  private formats: Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  private format: string = this.formats[0];
  private startdate: Date = new Date();
  private enddate: Date = new Date();
  public datelabel: string = 'Please choose a date';
  private selected: any;

  constructor() {
    this.disabled = false;
    this.selected = {};
  }

  public dateSelected(message: any) {
    this.selectedDate.emit(message);
    console.log("wtf this is in component");
  }

}
