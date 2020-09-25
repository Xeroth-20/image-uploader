import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-upload-progress',
    templateUrl: './upload-progress.component.html',
    styleUrls: ['./upload-progress.component.scss'],
    animations: [
        {}
    ]
})
export class UploadProgressComponent implements OnInit {

    @Input('progress')
    public progress: number;

    @Output('progressbarComplete')
    public uploadComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void { }

    public progressbarComplete(): void {
        console.log('event');
        if (this.progress == 100) this.uploadComplete.emit(true);
    }
}
