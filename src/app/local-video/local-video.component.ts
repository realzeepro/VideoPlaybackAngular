// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-local-video',
//   standalone: true,
//   imports: [],
//   templateUrl: './local-video.component.html',
//   styleUrl: './local-video.component.css'
// })
// export class LocalVideoComponent {

// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-video',
  templateUrl: './local-video.component.html',
  styleUrls: ['./local-video.component.css']
})
export class LocalVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
