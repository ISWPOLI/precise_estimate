import { Component, Inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'trackingView',
    templateUrl: './tracking.template.html',
    providers: []
})
export class TrackingComponent {

    public form: FormGroup;
    public showForm: boolean = false;
    public status: any = [
        { id_status: 1, status: "Iniciado" },
        { id_status: 2, status: "Finalizado" },
        { id_status: 3, status: "En desarrollo" },
        { id_status: 4, status: "Activo" },
        { id_status: 5, status: "Inactivo" }
    ];
    public users = [];
    public tasks = [
        {
            id_task: 1,
            name: "tarea 1",
            description: "algo",
            time: 12,
            fase: "Primera",
            date_start: "2017-01-01 00:00:00",
            date_end: "2017-01-01 00:00:00",
            id_story: 1,
            id_status: 1
        },
        {
            id_task: 2,
            name: "tarea 2",
            description: "algo",
            time: 12,
            fase: "Primera",
            date_start: "2017-01-01 00:00:00",
            date_end: "2017-01-01 00:00:00",
            id_story: 1,
            id_status: 1
        }
    ];
    public task = {};

    constructor( @Inject(FormBuilder) fb: FormBuilder,
        private _projectService: ProjectService,
        private _userService: UserService) {
        this.form = fb.group({});
        this.loadTasks();
        this.loadUsers();
    }

    private loadTasks() {
        this._projectService.getTaskbyUser(1).subscribe(
            data => {
                this.tasks = data;
            },
            error => {
                toastr.error(error, 'Error');
            });
    }

    public checkTask(t) {
        this.task = t;
        this.showForm = true;
    }

    public saveTask() {
        this.task = {};
        this.loadTasks();
        this.showForm = false;
    }

    public closeTask(id) {
        this._projectService.setTaskStatus(id, 2).subscribe(
            data => {
                toastr.success('Tarea cerrada correctamente', '');
            },
            error => {
                toastr.error(error, 'Error');
            });
        this.loadTasks();
    }

    public loadUsers() {
        this._userService.listUsers().subscribe(
            data => {
                this.users = data;
            },
            error => {
                toastr.error(error, 'Error');
            });

    }

}
