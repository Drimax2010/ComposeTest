import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeviceConfirmDialogComponent } from './update-device-confirm-dialog.component';

describe('UpdateDeviceConfirmDialogComponent', () => {
  let component: UpdateDeviceConfirmDialogComponent;
  let fixture: ComponentFixture<UpdateDeviceConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeviceConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeviceConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
