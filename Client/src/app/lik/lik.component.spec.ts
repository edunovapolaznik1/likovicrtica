import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikComponent } from './lik.component';

describe('LikComponent', () => {
  let component: LikComponent;
  let fixture: ComponentFixture<LikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikComponent]
    });
    fixture = TestBed.createComponent(LikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
