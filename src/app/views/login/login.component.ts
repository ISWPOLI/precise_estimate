import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { SessionStorageService, SessionStorage } from 'ng2-webstorage';
import { B1SLSessionService } from '../../services/B1SLSessionService';
import { SAPB1 } from '../../services/B1SLReference';
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'login',
    templateUrl: './login.template.html',
    providers: [LoginService]
})
export class loginComponent implements OnInit {

    _loginInfo: any = {
        user: "",
        password: ""
    };

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
        private b1SLService: B1SLSessionService,
        private _loginService: LoginService) {
    }

    public login() {
        this._loginService.login(this._loginInfo.user, this._loginInfo.password)
            .subscribe(
            data => {
                console.log(data);
                if (data.st == "ok") {
                    toastr.success(this._loginInfo.user + ' inició sesión', 'Bienvenido');
                    this.sessionSt.store('loggedIn', 'true');
                    this.sessionSt.store('LoggedInUser', this._loginInfo.UserName);
                    this.sessionSt.store('B1Session', this.B1Session);
                    this.router.navigate(['mainView']);
                } else {
                    toastr.error(data.data, 'Error');
                }
            },
            error => {
                console.log('Login Failure: ' + error);
                toastr.error('Incorrect Credentials', 'Logon Failed');
            });
    }

}
