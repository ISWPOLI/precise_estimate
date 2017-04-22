import { Component, ViewChild, Input, OnInit, Inject, ViewContainerRef, ElementRef } from '@angular/core';
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

    @ViewChild('epicmodal') epicmodal: ElementRef;
    @ViewChild('featuremodal') featuremodal: ElementRef;

    private idProject: number;
    private idEpic: number;
    private idFeature: number;
    public featureName: string;
    public epicName: string;

    public projectForm: FormGroup;
    public projects: any;
    public showForm: boolean = false;
    public epic: any = {};
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
        this.idProject = id_project;
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

    saveEpic() {
        this._projectService.createEpic(this.idProject, this.epicName).subscribe(
            data => {
                this.hideModal('epic');
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }

    editEpic(id) {
        //this.showFormEpic({});
    }

    saveFeature() {
        this._projectService.createFeature(this.idEpic, this.featureName).subscribe(
            data => {
                this.hideModal('feature');
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }

    showModal(mtype, id) {
        switch (mtype) {
            case "epic":
                this.idEpic = id;
                this.epicmodal.nativeElement.style.display = "block";
                break;
            case "feature":
                this.idFeature = id;
                this.featuremodal.nativeElement.style.display = "block";
                break;
        }
    }

    hideModal(mtype) {
        switch (mtype) {
            case "epic":
                this.idEpic = 0;
                this.epicmodal.nativeElement.style.display = "none";
                break;
            case "feature":
                this.idFeature = 0;
                this.featuremodal.nativeElement.style.display = "none";
                break;
        }
    }


}
