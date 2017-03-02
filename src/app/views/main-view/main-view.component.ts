import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'mianView',
    templateUrl: './main-view.template.html',
    providers: [UserService]
})
export class mainViewComponent {
    Title: string = "ahey";
    public userForm: FormGroup;
    public users: any;
    public showForm: boolean = false;

    constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private _userService: UserService) {
        this.userForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, this.isValidMailFormat])],
            password1: ['', Validators.required],
            password2: ['', Validators.required]
        });
        this.users = [];
        this.updateUserList();
    }

    updateUserList() {
        this._userService.listUsers().subscribe(
            data => {
                this.users = data;
            },
            error => {
                toastr.error(error, 'Error');
            });
    }

    showUserForm() {
        this.showForm = true;
    }

    editUser(id){
         this._userService.getUser(id).subscribe(
            data => {
                console.log(data);
            },
            error => {
                toastr.error(error, 'Error');
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
                this.showForm = false;
                this.updateUserList();
                this.userForm.reset();
            },
            error => {
                console.log('Error creando : ' + error);
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
