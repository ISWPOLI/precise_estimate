import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ng2-webstorage';

declare var jQuery: any;

@Component({
    selector: 'navigation',
    templateUrl: './navigation.template.html'
})

export class NavigationComponent implements OnInit{

    _sessionID: string;
    _loggedIn: boolean;
    _LoggedInUser: string;

    constructor(private router: Router, private sessionSt: SessionStorageService) { }

    ngOnInit() {
        this._LoggedInUser = this.sessionSt.retrieve('LoggedInUser');
        this._loggedIn = this.sessionSt.retrieve('loggedIn');
        this._sessionID = this.sessionSt.retrieve('sessionID');

        this.sessionSt.observe('sessionID')
            .subscribe((value) => this._sessionID = value);
        this.sessionSt.observe('loggedIn')
            .subscribe((value) => this._loggedIn = value);
        this.sessionSt.observe('LoggedInUser')
            .subscribe((value) => this._LoggedInUser = value);
    }

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }


}