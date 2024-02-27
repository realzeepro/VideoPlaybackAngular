import { Routes } from '@angular/router';
import { LocalVideoComponent } from './local-video/local-video.component';
import { OnlineVideoComponent } from './online-video/online-video.component';

export const routes: Routes = [
    { path: 'local-video', component: LocalVideoComponent },
  { path: 'online-video', component: OnlineVideoComponent },
];


