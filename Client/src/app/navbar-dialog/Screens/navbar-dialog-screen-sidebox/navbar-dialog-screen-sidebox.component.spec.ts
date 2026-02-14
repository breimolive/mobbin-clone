import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogScreenSideboxComponent } from './navbar-dialog-screen-sidebox.component';

describe('NavbarDialogScreenSideboxComponent', () => {
  let component: NavbarDialogScreenSideboxComponent;
  let fixture: ComponentFixture<NavbarDialogScreenSideboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogScreenSideboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogScreenSideboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
