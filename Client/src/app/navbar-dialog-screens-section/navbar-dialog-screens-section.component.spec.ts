import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogScreensSectionComponent } from './navbar-dialog-screens-section.component';

describe('NavbarDialogScreensSectionComponent', () => {
  let component: NavbarDialogScreensSectionComponent;
  let fixture: ComponentFixture<NavbarDialogScreensSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogScreensSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogScreensSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
