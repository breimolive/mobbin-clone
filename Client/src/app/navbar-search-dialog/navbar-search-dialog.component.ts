import { Component, ElementRef, ViewChild } from '@angular/core';
import NavbarDialogSidebarComponent from "../navbar-dialog-sidebar/navbar-dialog-sidebar.component";
import {NavbarDialogIconSectionComponent} from "../navbar-dialog/Trending/navbar-dialog-icon-section/navbar-dialog-icon-section.component";
import {
  NavbarDialogScreensSectionComponent
} from "../navbar-dialog/Trending/navbar-dialog-screens-section/navbar-dialog-screens-section.component";
import {
  NavbarDialogUiElementsSectionComponent
} from "../navbar-dialog/Trending/navbar-dialog-ui-elements-section/navbar-dialog-ui-elements-section.component";
import {NavbarDialogFlowsSectionComponent} from "../navbar-dialog/Trending/navbar-dialog-flows-section/navbar-dialog-flows-section.component";
import {
  NavbarDialogTextInScreenshotSectionComponent
} from "../navbar-dialog/Trending/navbar-dialog-text-in-screenshot-section/navbar-dialog-text-in-screenshot-section.component";
import {
  NavbarDialogCategoriesSectionComponent
} from "../navbar-dialog/Categories/navbar-dialog-categories-section/navbar-dialog-categories-section.component";

type SidebarSelected = 'Trending' | 'Categories' | 'Screens' | 'UI Elements' | 'Flows';
@Component({
  selector: 'app-navbar-search-dialog',
  templateUrl: './navbar-search-dialog.component.html',
  imports: [
    NavbarDialogSidebarComponent,
    NavbarDialogIconSectionComponent,
    NavbarDialogScreensSectionComponent,
    NavbarDialogUiElementsSectionComponent,
    NavbarDialogFlowsSectionComponent,
    NavbarDialogTextInScreenshotSectionComponent,
    NavbarDialogCategoriesSectionComponent
  ],
  standalone: true,
  styleUrl: './navbar-search-dialog.component.css'
})
export class NavbarSearchDialogComponent {
  @ViewChild('dialogRef') imageDialog!: ElementRef<HTMLDialogElement>;
  lastFiveSearches: string[] | null = null;
  mode: SidebarSelected = "Trending";

  private readonly backdropClickHandler = (event: MouseEvent) => {
    const dialog = this.imageDialog?.nativeElement;
    if (dialog && event.target === dialog || event.target === dialog.querySelector('.img')) {
      dialog.close();
    }
  };
  constructor() {}

  ngOnDestroy(): void {
    const dialog = this.imageDialog?.nativeElement;
    if (dialog) {
      dialog.open = false;
      dialog.removeEventListener('click', this.backdropClickHandler);
    }
  }

  show() {
    const dialog = this.imageDialog.nativeElement;
    dialog.showModal();
    dialog.addEventListener('click', this.backdropClickHandler);
  }

  changeMode(type: SidebarSelected) {
    console.log(type);
    this.mode = type;
    console.log(this.mode);
  }
}
