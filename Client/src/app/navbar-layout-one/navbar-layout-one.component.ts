import { Component, ViewChild } from '@angular/core';
import { NavbarSearchDialogComponent } from "../navbar-search-dialog/navbar-search-dialog.component";

@Component({
  selector: 'app-navbar-layout-one',
  templateUrl: './navbar-layout-one.component.html',
  imports: [
    NavbarSearchDialogComponent
  ],
  styleUrls: ['./navbar-layout-one.component.css',
    '../navbar/navbar.component.css'
  ]
})
export class NavbarLayoutOneComponent {
  @ViewChild('NavbarSearchDialogComponent') searchDialog: NavbarSearchDialogComponent | undefined;
  openDialog() {
    this.searchDialog?.show();
  }
}
