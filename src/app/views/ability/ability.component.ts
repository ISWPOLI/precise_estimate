import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AbilityService } from '../../services/ability.service';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'abilityView',
    templateUrl: './ability.template.html',
    providers: [UserService]
})
export class AbilityComponent {

    public projectForm: FormGroup;
    public users: any;
    public abilities: any;
    public ability: any;
    public user: any;

    constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private _userService: UserService,
        private _abilityService: AbilityService
    ) {
        this.projectForm = fb.group({
        });
        this.users = [];
        this.abilities = [];
        this.updateList();
    }

    public updateList() {
        this._userService.listUsers().subscribe(
            data => {
                this.users = data;
            },
            error => {
                toastr.error(error, 'Error');
            }
        );
        this._abilityService.listAbility().subscribe(
            data => {
                this.abilities = data;
            },
            error => {
                toastr.error(error, 'Error');
            }
        );
    }

    public assignAbility() {
        this._userService.assignAbility(this.user, this.ability).subscribe(
            data => {
                toastr.success("Asignado correctamente", 'OK');
            },
            error => {
                toastr.error(error, 'Error');
            }
        );
    }

}
