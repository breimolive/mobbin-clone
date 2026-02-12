import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogScreensContentSectionComponent } from './navbar-dialog-screens-content-section.component';

describe('NavbarDialogScreensContentSectionComponent', () => {
  let component: NavbarDialogScreensContentSectionComponent;
  let fixture: ComponentFixture<NavbarDialogScreensContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogScreensContentSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogScreensContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
