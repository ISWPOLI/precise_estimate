import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { SessionStorageService, SessionStorage } from 'ng2-webstorage';
import { B1SLSessionService } from '../../services/B1SLSessionService';
import { SAPB1 } from '../../services/B1SLReference';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

	constructor(
        @Inject(FormBuilder) fb: FormBuilder,
        private _projectService: ProjectService) {
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

    showProjectForm() {
        this.showForm = true;
    }
    submit(){
        let p = {};
        p["name"] = this.projectForm.value.name;
        p["status"] = this.projectForm.value.status;
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

}
