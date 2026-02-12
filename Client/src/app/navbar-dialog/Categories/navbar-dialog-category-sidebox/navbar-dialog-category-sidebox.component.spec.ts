import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogCategorySideboxComponent } from './navbar-dialog-category-sidebox.component';

describe('NavbarDialogCategorySideboxComponent', () => {
  let component: NavbarDialogCategorySideboxComponent;
  let fixture: ComponentFixture<NavbarDialogCategorySideboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogCategorySideboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogCategorySideboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
