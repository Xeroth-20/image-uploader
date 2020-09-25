import { Component, HostListener, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: ImageUploadComponent,
            multi: true
        }
    ]
})
export class ImageUploadComponent implements ControlValueAccessor, OnInit {

    private file: File | null = null;
    public onChange: Function;
    public onTouch: Function;

    @Output('fileSelected')
    public fileSelected: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private _el: ElementRef<HTMLInputElement>
    ) { }

    public ngOnInit(): void { }

    @HostListener('change', ['$event.target.files'])
    public onFileSelect(fileList: FileList): void {
        this.file = fileList && fileList.item(0);
        this.onChange(this.file);
        this.fileSelected.emit(true);
    }

    writeValue(value: null) {
        this.file = null;
        this._el.nativeElement.value = '';
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }
}
