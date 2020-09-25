import { tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

export function uploadProgress<T>(cb: (progress: number) => void) {
    return tap((event: HttpEvent<T>) => {
        if (event.type === HttpEventType.UploadProgress) {
            cb(Math.round(event.loaded / event.total * 100));
        }
    });
}
