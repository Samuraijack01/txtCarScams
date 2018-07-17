import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleComponent } from './possible.component';

describe('PossibleComponent', () => {
  let component: PossibleComponent;
  let fixture: ComponentFixture<PossibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
