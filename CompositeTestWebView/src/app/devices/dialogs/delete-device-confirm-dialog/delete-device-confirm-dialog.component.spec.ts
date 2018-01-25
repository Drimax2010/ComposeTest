import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeviceConfirmDialogComponent } from './delete-device-confirm-dialog.component';

describe('DeleteDeviceConfirmDialogComponent', () => {
  let component: DeleteDeviceConfirmDialogComponent;
  let fixture: ComponentFixture<DeleteDeviceConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDeviceConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDeviceConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
