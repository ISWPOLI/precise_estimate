import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { SessionStorageService, SessionStorage } from 'ng2-webstorage';
import { B1SLSessionService } from '../../services/B1SLSessionService';
import { SAPB1 } from '../../services/B1SLReference';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'project',
    templateUrl: './project.template.html',
    providers: [ProjectService]
})
export class ProjectComponent {
    public projectForm: FormGroup;
    public projects: any;
    public showForm: boolean = false;
    public epics: any = {};
    public release: any =

    [
        {
            id_release: 1,
            release: "Release 1",
            sprints: [
                {
                    id_sprint: 1,
                    sprint: "S1"
                },
                {
                    id_sprint: 2,
                    sprint: "S2"
                },
                {
                    id_sprint: 3,
                    sprint: "S3"
                }
            ]
        },
        {
            id_release: 2,
            release: "Release 2",
            sprints: [
                {
                    id_sprint: 4,
                    sprint: "S4"
                },
                {
                    id_sprint: 5,
                    sprint: "S5"
                },
                {
                    id_sprint: 6,
                    sprint: "S6"
                }
            ]
        }
    ];

    constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private _projectService: ProjectService,
        overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
        overlay.defaultViewContainer = vcRef;
        this.projectForm = fb.group({
            name: ['', Validators.required],
            status: ['', Validators.required],
        });
        this.projects = [];
        this.updateProjectList();
    }

    updateProjectList() {
        this._projectService.listProjects().subscribe(
            data => {
                this.projects = data;
            },
            error => {
                toastr.error(error, 'Error');
            });
    }

    editProject(id_project) {
        this.loadCompleteProject(id_project);
        this.showForm = true;
    }

    loadCompleteProject(id_project) {
        this._projectService.getCompleteProject(id_project).subscribe(
            data => {
                this.epics = data;
            },
            error => {
                toastr.error(error, 'Error');
            });
    }

    showProjectForm() {
        this.showForm = true;
    }

    submit() {
        let p = {};
        p["name"] = this.projectForm.value.name;
        p["type"] = "Software";
        p["dateStart"] = "hoy";
        p["dateEnd"] = "hoy";
        p["valueEstimate"] = 1000000;
        p["timeEstimate"] = 50;
        p["idStatus"] = this.projectForm.value.status;
        this._projectService.createProject(p).subscribe(
            data => {
                console.log(data);
                this.showForm = false;
                this.updateProjectList();
                this.projectForm.reset();
            },
            error => {
                console.log('Error creando : ' + error);
            });
    }

    onClick() {
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
            .open();
    }

}
