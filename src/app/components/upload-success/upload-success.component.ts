import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-upload-success',
    templateUrl: './upload-success.component.html',
    styleUrls: ['./upload-success.component.scss']
})
export class UploadSuccessComponent implements OnInit, AfterViewInit {

    @Input('uploadedFile')
    public uploadedFile: any;

    @ViewChild('linkInput')
    public linkInput: ElementRef<HTMLInputElement>;

    public copiedLink: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }
    
    ngAfterViewInit(): void {
        this.linkInput.nativeElement.value = this.uploadedFile.path;
    }

    public copyToClipboard(): void {
        this.linkInput.nativeElement.select();
        this.linkInput.nativeElement.setSelectionRange(0, 99999);
        document.execCommand('copy');
        this.copiedLink = true;
    }
}
