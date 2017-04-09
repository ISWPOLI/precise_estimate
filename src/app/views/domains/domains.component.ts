import { Component, Inject } from '@angular/core';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'domainsView',
    templateUrl: './domains.template.html',
    providers: []
})
export class DomainsComponent {

    public selected: string = "";
    public options: any = [];
    public dataDomain: any = [];
    public schema: any = [];
    public domain: any = {};
    public key: string = "";

    constructor() {
        this.options = ["Dominio 1", "Dominio 2"];
    }

    onChangeDomain() {
        switch (this.selected) {
            case "Dominio 1":
                this.dataDomain = [
                    { id: 1, name: "Tipo1", value: "10" },
                    { id: 2, name: "Tipo2", value: "15" }
                ];
                this.schema = {
                    "properties": {
                        "id": {
                            "type": "number",
                            "description": "ID",
                            "readOnly": true
                        },
                        "name": {
                            "type": "string",
                            "description": "Nombre"
                        },
                        "value": {
                            "type": "string",
                            "description": "Valor"
                        }
                    },
                    "required": ["name", "value"],
                };
                this.key = "id";
                break;
            case "Dominio 2":
                this.dataDomain = [];
                this.schema = [];
                break;
        }
    }

    saveDomain(data) {
        switch (this.selected) {
            case "Dominio 1":
                if (data.id > 0) {
                    console.log("Actualizar", data);
                } else {
                    console.log("Crear", data);
                }
                break;
        }
    }

    removeDomain(id) {
        switch (this.selected) {
            case "Dominio 1":
                if (id > 0) {
                    console.log("eliminar", id);
                }
                break;
        }
    }

    findDomain(id) {
        switch (this.selected) {
            case "Dominio 1":
                if (id > 0) {
                    this.domain = { id: 2, name: "Tipo2", value: "16" };
                }
                break;
        }
    }

    reloadDomain() {
        switch (this.selected) {
            case "Dominio 1":
                this.dataDomain = [
                    { id: 1, name: "Tipo1", value: "10" },
                    { id: 2, name: "Tipo2", value: "15" },
                    { id: 3, name: "Tipo4", value: "20" }
                ];
                break;
        }
    }

}
