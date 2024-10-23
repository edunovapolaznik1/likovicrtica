import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikCreateComponent } from './lik-create.component';

describe('LikCreateComponent', () => {
  let component: LikCreateComponent;
  let fixture: ComponentFixture<LikCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikCreateComponent]
    });
    fixture = TestBed.createComponent(LikCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
