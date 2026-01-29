import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogTextInScreenshotSectionComponent } from './navbar-dialog-text-in-screenshot-section.component';

describe('NavbarDialogTextInScreenshotSectionComponent', () => {
  let component: NavbarDialogTextInScreenshotSectionComponent;
  let fixture: ComponentFixture<NavbarDialogTextInScreenshotSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogTextInScreenshotSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogTextInScreenshotSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
