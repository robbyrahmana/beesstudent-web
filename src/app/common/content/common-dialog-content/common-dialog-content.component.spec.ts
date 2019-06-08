import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDialogContentComponent } from './common-dialog-content.component';

describe('CommonDialogContentComponent', () => {
  let component: CommonDialogContentComponent;
  let fixture: ComponentFixture<CommonDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
