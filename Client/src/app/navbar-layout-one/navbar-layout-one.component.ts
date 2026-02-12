import { Component, ViewChild } from '@angular/core';
import { NavbarSearchDialogComponent } from "../navbar-search-dialog/navbar-search-dialog.component";
import {
  NavbarDialogCategorySideboxComponent
} from "../navbar-dialog/Categories/navbar-dialog-category-sidebox/navbar-dialog-category-sidebox.component";
import {buttonCategoryData} from "../api.service";

@Component({
  selector: 'app-navbar-layout-one',
  templateUrl: './navbar-layout-one.component.html',
  imports: [
    NavbarSearchDialogComponent
  ],
  standalone: true,
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
