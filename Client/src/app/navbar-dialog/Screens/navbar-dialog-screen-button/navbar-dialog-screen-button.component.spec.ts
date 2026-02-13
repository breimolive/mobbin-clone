import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogScreenButtonComponent } from './navbar-dialog-screen-button.component';

describe('NavbarDialogScreenButtonComponent', () => {
  let component: NavbarDialogScreenButtonComponent;
  let fixture: ComponentFixture<NavbarDialogScreenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogScreenButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogScreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
