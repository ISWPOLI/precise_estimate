import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SessionStorageService, SessionStorage} from 'ng2-webstorage';
import { B1SLSessionService } from '../../services/B1SLSessionService';
import { SAPB1 } from '../../services/B1SLReference';
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'login',
    templateUrl: './login.template.html'
})
export class loginComponent implements OnInit {
    _loginInfo: SAPB1.LoginInfo;
    _companies = ['SBODEMOANDRES', 'APATLANTIC', 'SBODEMOUS_NEW'];
    loginFailure: boolean;
    $: any = jQuery;

    @SessionStorage()
    loggedIn: boolean;
    @SessionStorage()
    LoggedInUser: string;
    @SessionStorage()
    B1Session: SAPB1.B1Session;

    ngOnInit() {
        this._loginInfo = new SAPB1.LoginInfo();
    }

    constructor(
        private sessionSt: SessionStorageService,
        private router: Router,
        private b1SLService: B1SLSessionService) {
    }

    Login() {
        this.loginFailure = false;
        let l = Ladda.create(document.querySelector('.ladda-button'));
        l.start();

        this.b1SLService.doLogin(this._loginInfo)
            .subscribe(
                data => {
                    this.B1Session = data;
                    toastr.success(this._loginInfo.UserName + ' logged in', 'Welcome' );
                    this.sessionSt.store('loggedIn', 'true');
                    this.sessionSt.store('LoggedInUser', this._loginInfo.UserName);
                    this.sessionSt.store('B1Session', this.B1Session);
                    l.stop();
                    this.router.navigate(['mainView']);
                }
                , error => {
                    this.loginFailure = true;
                    console.log('Login Failure: ' + error);
                    l.stop();
                    toastr.error('Incorrect Credentials', 'Logon Failed');
                }
            );
    }
}
