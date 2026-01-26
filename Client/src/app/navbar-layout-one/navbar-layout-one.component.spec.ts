import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLayoutOneComponent } from './navbar-layout-one.component';

describe('NavbarLayoutOneComponent', () => {
  let component: NavbarLayoutOneComponent;
  let fixture: ComponentFixture<NavbarLayoutOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarLayoutOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLayoutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
