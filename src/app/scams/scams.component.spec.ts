import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScamsComponent } from './scams.component';

describe('ScamsComponent', () => {
  let component: ScamsComponent;
  let fixture: ComponentFixture<ScamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
