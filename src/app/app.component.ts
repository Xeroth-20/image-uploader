import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/* Services */
import { MyValidatorsService } from './services/my-validators.service';
import { FileUploadService } from './services/file-upload.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public imagePath: string | ArrayBuffer = './assets/images/default.jpg';
    public fileForm: FormGroup;
    public fileReader: FileReader;
    public progress: number = 0;
    public progressbarComplete: boolean = false;
    public uploading: boolean = false;
    public uploadedFile: any;

    constructor(
        private _fb: FormBuilder,
        private _myValidators: MyValidatorsService,
        private _fileUpload: FileUploadService
    ) { }

    public ngOnInit(): void {
        this.fileReader = new FileReader();
        this.fileReader.addEventListener('load', (ev) => {
            this.setImagePath(ev.target.result);
        });
        this.fileForm = this._fb.group({
            imageUpload: [null, [Validators.required, this._myValidators.requiredFileType(['jpg', 'png'])]]
        });
        this.fileForm.get('imageUpload').valueChanges.subscribe(
            (newValue) => {
                if (newValue instanceof File) {
                }
            }
        );
        console.log(this.fileForm.get('imageUpload').touched);
    }

    public fileUpload(): void {
        if (this.fileForm.valid) {
            this._fileUpload.uploadImage(this.fileForm.get('imageUpload').value, (progress: number) => this.progress = progress)
                .subscribe(
                    (response) => {
                        this.uploadedFile = response;
                        console.log(this.uploadedFile);
                    }
                );
            this.uploading = true;
        }
    }

    private setImagePath(path: any): void {
        this.imagePath = path;
    }
}
