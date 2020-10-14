import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTimeComponent } from './solution-time.component';

describe('SolutionTimeComponent', () => {
  let component: SolutionTimeComponent;
  let fixture: ComponentFixture<SolutionTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
