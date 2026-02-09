import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogCategoriesSectionComponent } from './navbar-dialog-categories-section.component';

describe('NavbarDialogCategoriesSectionComponent', () => {
  let component: NavbarDialogCategoriesSectionComponent;
  let fixture: ComponentFixture<NavbarDialogCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogCategoriesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
