import { Component } from '@angular/core';
import {NavbarLayoutOneComponent} from "../navbar-layout-one/navbar-layout-one.component";
import {NavbarLayoutTwoComponent} from "../navbar-layout-two/navbar-layout-two.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    NavbarLayoutOneComponent,
    NavbarLayoutTwoComponent
  ],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
