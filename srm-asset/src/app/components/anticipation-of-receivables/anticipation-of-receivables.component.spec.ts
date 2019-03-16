import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipationOfReceivablesComponent } from './anticipation-of-receivables.component';

describe('AnticipationOfReceivablesComponent', () => {
  let component: AnticipationOfReceivablesComponent;
  let fixture: ComponentFixture<AnticipationOfReceivablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticipationOfReceivablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticipationOfReceivablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
