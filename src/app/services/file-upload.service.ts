import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/* custom operators */
import { uploadProgress, toResponseBody } from './../functions/custom-operators';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    private baseUrl: string = 'http://localhost:3000/upload/';

    constructor(
        private _http: HttpClient
    ) { }

    public uploadImage(image: File, onProgress?: (progress: number) => void): Observable<Object> {
        const formData = new FormData();
        const httpHeaders = new HttpHeaders({
            'Accept': 'application/json'
        });
        formData.append('file', image);

        return this._http.post('http://localhost:3000/upload/image', formData,
            {
                headers: httpHeaders,
                reportProgress: true,
                observe: 'events'
            }).pipe(
                uploadProgress(onProgress),
                toResponseBody()
            );
                
    }
}
