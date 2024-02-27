import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineVideoComponent } from './online-video.component';

describe('OnlineVideoComponent', () => {
  let component: OnlineVideoComponent;
  let fixture: ComponentFixture<OnlineVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
