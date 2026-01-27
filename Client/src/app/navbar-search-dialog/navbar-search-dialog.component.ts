import { Component, ElementRef, ViewChild } from '@angular/core';
import {NavbarDialogSidebarComponent} from "../navbar-dialog-sidebar/navbar-dialog-sidebar.component";
import {NavbarDialogIconSectionComponent} from "../navbar-dialog-icon-section/navbar-dialog-icon-section.component";

@Component({
  selector: 'app-navbar-search-dialog',
  templateUrl: './navbar-search-dialog.component.html',
  imports: [
    NavbarDialogSidebarComponent,
    NavbarDialogIconSectionComponent
  ],
  styleUrl: './navbar-search-dialog.component.css'
})
export class NavbarSearchDialogComponent {
  @ViewChild('dialogRef') imageDialog!: ElementRef<HTMLDialogElement>;
  lastFiveSearches: string[] | null = null;
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
}
