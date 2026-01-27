import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearchDialogComponent } from './navbar-search-dialog.component';

describe('NavbarSearchDialogComponent', () => {
  let component: NavbarSearchDialogComponent;
  let fixture: ComponentFixture<NavbarSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarSearchDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
