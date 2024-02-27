import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LocalVideoComponent } from './local-video/local-video.component';
import { OnlineVideoComponent } from './online-video/online-video.component';

const routes: Routes = [
  { path: 'local-video', component: LocalVideoComponent },
  { path: 'online-video', component: OnlineVideoComponent },
  { path: '', redirectTo: '/local-video', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LocalVideoComponent,
    OnlineVideoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

