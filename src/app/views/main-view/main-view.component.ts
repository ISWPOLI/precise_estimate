import { Component } from '@angular/core';

declare var swal: any;

@Component({
    selector: 'mianView',
    templateUrl: './main-view.template.html'
})
export class mainViewComponent {
    Title: string = "ahey";
    showAlert() {
        swal({
            title: 'Are you sure?',
            text: 'You will lose all progress if you leave this page',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(function () {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
        }).catch(swal.noop);
    }
}
