import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerregisterComponent } from './workerregister.component';

describe('WorkerregisterComponent', () => {
  let component: WorkerregisterComponent;
  let fixture: ComponentFixture<WorkerregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
