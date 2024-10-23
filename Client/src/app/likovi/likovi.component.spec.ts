import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikoviComponent } from './likovi.component';

describe('LikoviComponent', () => {
  let component: LikoviComponent;
  let fixture: ComponentFixture<LikoviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikoviComponent]
    });
    fixture = TestBed.createComponent(LikoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
