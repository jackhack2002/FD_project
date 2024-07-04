import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedOutcomeComponent } from './processed-outcome.component';

describe('ProcessedOutcomeComponent', () => {
  let component: ProcessedOutcomeComponent;
  let fixture: ComponentFixture<ProcessedOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedOutcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessedOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
