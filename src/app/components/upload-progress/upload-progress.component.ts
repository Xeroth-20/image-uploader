import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-upload-progress',
    templateUrl: './upload-progress.component.html',
    styleUrls: ['./upload-progress.component.scss'],
    animations: [
        {}
    ]
})
export class UploadProgressComponent implements OnInit, OnChanges {

    @Input('progress')
    public progress: number;

    @Output('progressbarComplete')
    public uploadComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void { }

    ngOnChanges(): void {
        this.progressbarComplete();
    }

    public progressbarComplete(): void {
        setTimeout(() => {
            if (this.progress == 100) this.uploadComplete.emit(true);
        }, 1000);
    }
}
