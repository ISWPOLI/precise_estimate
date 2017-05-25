import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

declare var toastr: any;

@Component({
    selector: 'register',
    templateUrl: './register.template.html'
})
export class registerComponent {

    _registerInfo: any = {};
    constructor(
        private _userService: UserService,
        private router: Router) {
    }
    register() {
        console.log(this._registerInfo);

        let savePromise = this._userService.createUser(this._registerInfo).subscribe(
            data => {
                console.log("Ok");
            },
            error => {
                toastr.error(error, 'Error');
            }
        );
    }

    login() {
        this.router.navigate(['login']);
    }
}