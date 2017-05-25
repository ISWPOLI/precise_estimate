import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigModule } from './config';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  private endpoint_url: string;

  constructor(public http: Http) {
    this.endpoint_url = ConfigModule.APIURL + '/';
    this.http = http;
  }

  public createProject(ProjectForm: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "project/createProject", ProjectForm, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public updateProject(ProjectForm: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "project/editProject", ProjectForm, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createEpic(idProject: number, nameEpic: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "epic", { idProject: idProject, name: nameEpic }, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createFeature(id_epic: number, nameFeature: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "feature", { idEpic: id_epic, name: nameFeature }, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createStory(idFeature: number, nameStory: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "story", { idFeature: idFeature, name: nameStory }, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createSprint(idRelease: number, sprintName: string, sprintStart: string, sprintEnd: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "project/createSprint", { idRelease: idRelease, name: sprintName, dateStart: sprintStart, dateEnd: sprintEnd }, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public changeSprint(id_story: number, id_sprint: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "story/changeSprint", { idStory: id_story, idSprint: id_sprint }, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createRelease(idProject: number, releaseName: string, releaseDue: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "project/createRelease", { idProject: idProject, name: releaseName, dueDate: releaseDue }, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createTask(idStory: number, taskName: string, taskDescription: string, taskTime: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpoint_url + "task", { idStory: idStory, name: taskName, description: taskDescription, time: taskTime }, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getTask(idTask: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.endpoint_url + "task/getTask?idTask=" + idTask, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public listProjects() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.endpoint_url + "project", options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getProject(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.endpoint_url + "project" + "/findProject?idProject=" + id, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getCompleteProject(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.endpoint_url + "project" + "/getCompleteProject?idProject=" + id, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getReleasePlanning(id: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.endpoint_url + "project" + "/getReleasePlanning?idProject=" + id, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
