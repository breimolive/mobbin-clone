import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLayoutTwoComponent } from './navbar-layout-two.component';

describe('NavbarLayoutTwoComponent', () => {
  let component: NavbarLayoutTwoComponent;
  let fixture: ComponentFixture<NavbarLayoutTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarLayoutTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLayoutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
