import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogUiElementsSectionComponent } from './navbar-dialog-ui-elements-section.component';

describe('NavbarDialogUiElementsSectionComponent', () => {
  let component: NavbarDialogUiElementsSectionComponent;
  let fixture: ComponentFixture<NavbarDialogUiElementsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogUiElementsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogUiElementsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
