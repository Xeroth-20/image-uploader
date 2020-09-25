import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { UploadProgressComponent } from './components/upload-progress/upload-progress.component';
import { UploadSuccessComponent } from './components/upload-success/upload-success.component';

/* Directives */
import { DragDropDirective } from './directives/drag-drop.directive';

@NgModule({
    declarations: [
        AppComponent,
        ImageUploadComponent,
        UploadProgressComponent,
        UploadSuccessComponent,
        DragDropDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
