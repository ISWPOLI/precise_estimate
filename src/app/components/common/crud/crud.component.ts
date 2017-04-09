import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
    selector: 'crud',
    templateUrl: './crud.template.html'
})
export class CrudComponent {
    @Input() title: any;
    @Input() data: any;
    @Input() model: any;// Data to save
    @Input() schema: any = { properties: {} };
    @Input() actions: any = {};
    @Input() key: string = "";
    @Output() save = new EventEmitter();
    @Output() remove = new EventEmitter();
    @Output() find = new EventEmitter();
    @Output() reload = new EventEmitter();

    public dataForm = {}; // Default values
    public action = "Listar";

    newItem() {
        this.dataForm = {};
        this.action = "Crear";
    }

    editItem(id) {
        this.find.emit(id);
        this.action = "Editar";
    }

    saveItem() {
        this.save.emit(this.model);
        this.action = "Listar";
        this.reload.emit();
    }

    removeItem(id) {
        this.remove.emit(id);
        this.reload.emit();
    }

    ngOnChanges(changes: SimpleChanges) {
        if ('model' in changes) {
            this.dataForm = this.model;
        }
    }

}