import { Component, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'userView',
    templateUrl: './user.template.html',
    providers: [UserService]
})
export class UserComponent {

    public users: any;
    public schema: any = [];
    public user: any = {};
    public key: string = "";

    constructor(private _userService: UserService) {
        this.users = [];
        this.schema = {
            "properties": {
                "id_user": {
                    "type": "number",
                    "description": "ID",
                    "readOnly": true
                },
                "name": {
                    "type": "string",
                    "description": "Nombre"
                },
                "email": {
                    "type": "string",
                    "description": "Email",
                    "format": "email"
                },
                "password": {
                    "type": "string",
                    "description": "Contraseña",
                    "visible": false,
                    "widget": "password"
                },
                "recovery": {
                    "type": "string",
                    "description": "recovery",
                    "visible": false,
                    "visibleIf": { id_user: [false] }
                },
                "id_profile": {
                    "type": "string",
                    "description": "Perfil"
                }
            },
            "required": ["name", "email", "id_profile"],
        };
        this.key = "id_user";
        this.reload();
    }

    save(data) {
        let savePromise;
        if (data.id_user > 0) {
            savePromise = this._userService.updateUser(data);
        } else {
            savePromise = this._userService.createUser(data);
        }
        savePromise.subscribe(
            data => {
                this.reload();
                this.user = {};
            },
            error => {
                toastr.error(error, 'Error');
            }
        );
    }

    remove(id_user) {
        if (id_user > 0) {
            console.log("eliminar", id_user);
        }
    }

    find(id_user) {
        if (id_user > 0) {
            this._userService.getUser(id_user).subscribe(
                data => {
                    this.user = data;
                },
                error => {
                    toastr.error(error, 'Error');
                });
        }
    }

    reload() {
        this._userService.listUsers().subscribe(
            data => {
                this.users = data;
            },
            error => {
                toastr.error(error, 'Error');
            });

    }

    private isValidMailFormat(control: string) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control != "" && (control.length <= 5 || !EMAIL_REGEXP.test(control))) {
            return { "Please provide a valid email": true };
        }
        return null;
    }
}
