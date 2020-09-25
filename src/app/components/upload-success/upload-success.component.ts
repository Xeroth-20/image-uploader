import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-upload-success',
    templateUrl: './upload-success.component.html',
    styleUrls: ['./upload-success.component.scss']
})
export class UploadSuccessComponent implements OnInit {

    @Input('uploadedFile')
    public uploadedFile: any;

    constructor() { }

    ngOnInit(): void {
    }
}
