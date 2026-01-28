import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDialogSidebarComponent } from './navbar-dialog-sidebar.component';

describe('NavbarDialogSidebarComponent', () => {
  let component: NavbarDialogSidebarComponent;
  let fixture: ComponentFixture<NavbarDialogSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarDialogSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDialogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
