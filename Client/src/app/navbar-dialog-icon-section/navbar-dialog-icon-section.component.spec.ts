import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogIconSectionComponent } from './navbar-dialog-icon-section.component';

describe('NavbarDialogIconSectionComponent', () => {
  let component: NavbarDialogIconSectionComponent;
  let fixture: ComponentFixture<NavbarDialogIconSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogIconSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogIconSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
