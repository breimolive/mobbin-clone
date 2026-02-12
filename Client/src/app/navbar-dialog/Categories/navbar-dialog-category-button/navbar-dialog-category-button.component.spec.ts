import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogCategoryButtonComponent } from './navbar-dialog-category-button.component';

describe('NavbarDialogCategoryButtonComponent', () => {
  let component: NavbarDialogCategoryButtonComponent;
  let fixture: ComponentFixture<NavbarDialogCategoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogCategoryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
