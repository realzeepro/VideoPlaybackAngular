import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-online-video',
  templateUrl: './online-video.component.html',
  styleUrls: ['./online-video.component.css']
})
export class OnlineVideoComponent {
  @ViewChild('video') videoElement!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;

  constructor() { }

  capture() {
    const canvas = this.canvas.nativeElement;
    const video1 = this.videoElement.nativeElement;
        
    // Pause the video
    if (!video1.paused) {
      video1.pause();
    }
    
    // Draw the paused frame on canvas
    canvas.getContext('2d').drawImage(video1, 0, 0, video1.videoWidth, video1.videoHeight);

  }

  clearCanvas() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');

    // Clear the entire canvas
    ctx.clearRect(2, 2, canvas.width, canvas.height);
  }
}
