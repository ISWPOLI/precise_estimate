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
    model = {};
    mySchema = {
        "properties": {
            "email": {
                "type": "string",
                "description": "email",
                "format": "email"
            },
            "password": {
                "type": "string",
                "description": "Password",
                "buttons": [{
                    "id": "reset",
                    "label": "Reset"
                }]
            },
            "rememberMe": {
                "type": "boolean",
                "default": false,
                "description": "Remember me"
            }
        },
        "required": ["email", "password", "rememberMe"],
        "buttons": [{
            "id": "alert", // the id of the action callback
            "label": "Alert !" // the text inside the button
        }]
    };

    myActions = {
        "alert": (property) => { alert(JSON.stringify(property.value)) },
        "reset": (property) => { property.reset() }
    };

}
