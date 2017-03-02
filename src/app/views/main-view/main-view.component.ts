import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

declare var swal: any;

@Component({
    selector: 'mianView',
    templateUrl: './main-view.template.html',
    providers: [UserService]
})
export class mainViewComponent {
    Title: string = "ahey";
    public userForm: FormGroup;

    constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private _userService: UserService) {
        this.userForm = fb.group({
            name: ['pepe1', Validators.required],
            email: ['pepe1@appsglobals.com', Validators.compose([Validators.required, this.isValidMailFormat])],
            password1: ['123', Validators.required],
            password2: ['123', Validators.required]
        });
    }

    submit() {
        let user = {};
        user["name"] = this.userForm.value.name;
        user["email"] = this.userForm.value.email;
        user["password"] = this.userForm.value.password1;
        this._userService.createUser(user).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log('Login Failure: ' + error);
            });
    }

    private isValidMailFormat(control: FormControl) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }
        return null;
    }

    showAlert() {
        swal({
            title: 'Are you sure?',
            text: 'You will lose all progress if you leave this page',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(function () {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
        }).catch(swal.noop);
    }
}
