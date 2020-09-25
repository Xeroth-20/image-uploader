import { Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appDragDrop]'
})
export class DragDropDirective {

    @Output('onFileDrop')
    public fileEmitter: EventEmitter<FileList> = new EventEmitter<FileList>();

    @HostBinding('class.dragover')
    public dragover: boolean = false;

    @HostListener('dragover', ['$event'])
    public onDragOver(event: DragEvent) {
        this.preventEvent(event);
        this.dragover = true;
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: DragEvent) {
        this.preventEvent(event);
        this.dragover = false;
    }

    @HostListener('drop', ['$event'])
    public onDrop(event: DragEvent) {
        this.preventEvent(event);
        this.fileEmitter.emit(event.dataTransfer.files);
    }

    private preventEvent(event): void {
        event.preventDefault();
        event.stopPropagation();
    }
}
