import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import {SessionStorageService, SessionStorage} from 'ng2-webstorage';
import {Router} from '@angular/router';

import { B1SLSessionService } from '../../../services/B1SLSessionService';
import { SAPB1 } from '../../../services/B1SLReference';
declare var jQuery: any;
declare var toastr: any;

@Component({
    selector: 'topnavbar',
    templateUrl: './topnavbar.template.html'
})
export class TopnavbarComponent implements OnInit{

    _router: Router;
    @SessionStorage()
    loggedIn: boolean;
    @SessionStorage()
    LoggedInUser: string;
    @SessionStorage()
    B1Session: SAPB1.B1Session;

    constructor(private sessionSt: SessionStorageService, router: Router, private _b1SLService: B1SLSessionService) {
        this._router = router;
    }

    ngOnInit() {

    }

    toggleNavigation(): void {
        jQuery('body').toggleClass('mini-navbar');
        smoothlyMenu();
    }

    Logout() {
        console.log('Attempting to log out from session: ');
        this._b1SLService.doLogout('')
            .subscribe(data => {
                toastr.info(this.LoggedInUser + ' logged out', 'Goodbye');
                this.sessionSt.store('loggedIn', false);
                this.sessionSt.store('LoggedInUser', null);
                this.sessionSt.clear('B1Session');
                this._router.navigate(['mainView']);
            }, error => {
                toastr.error(error, 'Error');
            });
    }
}
