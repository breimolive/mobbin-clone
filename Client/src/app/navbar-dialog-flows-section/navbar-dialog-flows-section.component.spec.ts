import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogFlowsSectionComponent } from './navbar-dialog-flows-section.component';

describe('NavbarDialogFlowsSectionComponent', () => {
  let component: NavbarDialogFlowsSectionComponent;
  let fixture: ComponentFixture<NavbarDialogFlowsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogFlowsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogFlowsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
