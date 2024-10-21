import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerdashboardComponent } from './workerdashboard.component';

describe('WorkerdashboardComponent', () => {
  let component: WorkerdashboardComponent;
  let fixture: ComponentFixture<WorkerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
