import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'roleassignmentView',
    templateUrl: './roleassignment.template.html',
    providers: []
})
export class RoleassignmentComponent {
    
    public form: FormGroup;
    
    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({ });
    }

}
