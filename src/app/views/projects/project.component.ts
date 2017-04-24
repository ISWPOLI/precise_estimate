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
    @ViewChild('storymodal') storymodal: ElementRef;
    @ViewChild('sprintmodal') sprintmodal: ElementRef;
    @ViewChild('releasemodal') releasemodal: ElementRef;
    @ViewChild('taskmodal') taskmodal: ElementRef;

    public user: any = { name: '' };

    private idProject: number;
    private idEpic: number;
    private idFeature: number;
    private idStory: number;
    private idTask: number;
    private idRelease: number;

    public featureName: string;
    public epicName: string;
    public storyName: string;
    public sprintName: string;
    public sprintStart: string;
    public sprintEnd: string;
    public releaseName: string;
    public releaseDue: string;
    public taskName: string;
    public taskDescription: string;
    public taskTime: string;

    public projectForm: FormGroup;
    public projects: any;
    public showForm: boolean = false;
    public types: any = [
        "Basados en Web",
        "Dispositivos Móviles",
        "Escritorio",
        "Mixto"
    ];
    public status: any = [
        { id_status: 1, status: "Iniciado" },
        { id_status: 2, status: "Finalizado" },
        { id_status: 3, status: "En desarrollo" },
        { id_status: 4, status: "Activo" },
        { id_status: 5, status: "Inactivo" }
    ];
    public epic: any = {};
    public epics: any = {};
    public release: any = [];


    constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private _projectService: ProjectService,
        overlay: Overlay, vcRef: ViewContainerRef,
        public modal: Modal,
        private sessionSt: SessionStorageService,
        private router: Router) {
        if (!this.sessionSt.retrieve('loggedIn')) {
            this.router.navigate(['login']);
        } else {
            this.user = this.sessionSt.retrieve('LoggedInUser');
        }
        overlay.defaultViewContainer = vcRef;
        this.projectForm = fb.group({
            name: ['', Validators.required],
            typep: ['', Validators.required],
            date_start: ['', Validators.required],
            date_end: ['', Validators.required],
            value_estimate_total: ['', Validators.required],
            time_estimate_total: ['', Validators.required],
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
        this._projectService.getProject(id_project).subscribe(
            data => {
                this.projectForm.patchValue({
                    name: data[0].name,
                    typep: data[0].type,
                    date_start: data[0].date_start,
                    date_end: data[0].date_end,
                    value_estimate_total: parseInt(data[0].value_estimate_total),
                    time_estimate_total: parseInt(data[0].time_estimate_total),
                    status: parseInt(data[0].id_status)
                });
            },
            error => {
                toastr.error(error, 'Error');
            });
    }

    loadCompleteProject(id_project) {
        this._projectService.getCompleteProject(id_project).subscribe(
            data => {
                this.epics = data;
            },
            error => {
                toastr.error(error, 'Error');
            });
        this._projectService.getReleasePlanning(id_project).subscribe(
            data => {
                this.release = data;
            },
            error => {
                toastr.error(error, 'Error');
            });
    }

    createProject() {
        this.idProject = 0;
        this.showForm = true;
    }

    saveProject() {
        let p = {};
        p["name"] = this.projectForm.value.name;
        p["type"] = this.projectForm.value.typep;
        p["dateStart"] = this.projectForm.value.date_start;
        p["dateEnd"] = this.projectForm.value.date_end;
        p["value"] = this.projectForm.value.value_estimate_total;
        p["time"] = this.projectForm.value.time_estimate_total;
        p["idStatus"] = this.projectForm.value.status;
        if (this.idProject == 0) {
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
        } else {
            p["idProject"] = this.idProject;
            this._projectService.updateProject(p).subscribe(
                data => {
                    toastr.success('Actualizado correctamente!', '');
                },
                error => {
                    console.log('Error creando : ' + error);
                });
        }
    }

    /* EPIC */

    editEpic(id) {
        //this.showFormEpic({});
    }

    saveEpic() {
        this._projectService.createEpic(this.idProject, this.epicName).subscribe(
            data => {
                this.hideModal('epic');
                this.loadCompleteProject(this.idProject);
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }

    /* FEATURE */

    saveFeature() {
        console.log(this.idEpic, this.featureName);
        this._projectService.createFeature(this.idEpic, this.featureName).subscribe(
            data => {
                this.hideModal('feature');
                this.loadCompleteProject(this.idProject);
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }

    /* STORY */

    saveStory() {
        this._projectService.createStory(this.idFeature, this.storyName).subscribe(
            data => {
                this.hideModal('story');
                this.loadCompleteProject(this.idProject);
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }

    /* SPRINT */

    saveSprint() {
        this._projectService.createSprint(this.idRelease, this.sprintName, this.sprintStart, this.sprintEnd).subscribe(
            data => {
                this.hideModal('sprint');
                this.loadCompleteProject(this.idProject);
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }

    changeSprint(e, id_story) {
        this._projectService.changeSprint(id_story, e.target.value).subscribe(
            data => {
                this.loadCompleteProject(this.idProject);
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }

    /* RELEASE */

    saveRelease() {
        this._projectService.createRelease(this.idProject, this.releaseName, this.releaseDue).subscribe(
            data => {
                this.hideModal('release');
                this.loadCompleteProject(this.idProject);
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }

    /* TASK */

    saveTask() {
        this._projectService.createTask(this.idStory, this.taskName, this.taskDescription, this.taskTime).subscribe(
            data => {
                this.hideModal('task');
                this.loadCompleteProject(this.idProject);
            },
            error => {
                console.log('Error creando : ' + error);
            }
        );
    }


    /* TOOLS */

    showModal(mtype, id) {
        switch (mtype) {
            case "epic":
                this.epicName = "";
                this.epicmodal.nativeElement.style.display = "block";
                break;
            case "feature":
                this.idEpic = id;
                this.featureName = "";
                this.featuremodal.nativeElement.style.display = "block";
                break;
            case "story":
                this.idFeature = id;
                this.storyName = "";
                this.storymodal.nativeElement.style.display = "block";
                break;
            case "sprint":
                this.idRelease = id;
                this.sprintName = "";
                this.sprintStart = "";
                this.sprintEnd = "";
                this.sprintmodal.nativeElement.style.display = "block";
                break;
            case "release":
                this.releaseName = "";
                this.releaseDue = "";
                this.releasemodal.nativeElement.style.display = "block";
                break;
            case "task":
                this.idStory = id;
                this.taskName = "";
                this.taskDescription = "";
                this.taskTime = "";
                this.taskmodal.nativeElement.style.display = "block";
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
            case "story":
                this.idStory = 0;
                this.storymodal.nativeElement.style.display = "none";
                break;
            case "sprint":
                this.idRelease = 0;
                this.sprintmodal.nativeElement.style.display = "none";
                break;
            case "release":
                this.releasemodal.nativeElement.style.display = "none";
                break;
            case "task":
                this.idStory = 0;
                this.taskmodal.nativeElement.style.display = "none";
                break;
        }
    }


}
