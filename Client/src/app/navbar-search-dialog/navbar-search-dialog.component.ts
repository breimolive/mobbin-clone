import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import NavbarDialogSidebarComponent from "../navbar-dialog-sidebar/navbar-dialog-sidebar.component";
import {
  NavbarDialogIconSectionComponent
} from "../navbar-dialog/Trending/navbar-dialog-icon-section/navbar-dialog-icon-section.component";
import {
  NavbarDialogScreensSectionComponent
} from "../navbar-dialog/Trending/navbar-dialog-screens-section/navbar-dialog-screens-section.component";
import {
  NavbarDialogUiElementsSectionComponent
} from "../navbar-dialog/Trending/navbar-dialog-ui-elements-section/navbar-dialog-ui-elements-section.component";
import {
  NavbarDialogFlowsSectionComponent
} from "../navbar-dialog/Trending/navbar-dialog-flows-section/navbar-dialog-flows-section.component";
import {
  NavbarDialogTextInScreenshotSectionComponent
} from "../navbar-dialog/Trending/navbar-dialog-text-in-screenshot-section/navbar-dialog-text-in-screenshot-section.component";
import {
  NavbarDialogCategoriesSectionComponent
} from "../navbar-dialog/Categories/navbar-dialog-categories-section/navbar-dialog-categories-section.component";
import buttonCategoryData, {buttonScreensData} from "../api.service";
import {
  NavbarDialogCategorySideboxComponent
} from "../navbar-dialog/Categories/navbar-dialog-category-sidebox/navbar-dialog-category-sidebox.component";
import { CommonModule } from '@angular/common';
import {
  NavbarDialogScreensContentSectionComponent
} from "../navbar-dialog/Screens/navbar-dialog-screens-content-section/navbar-dialog-screens-content-section.component";
import {
  NavbarDialogScreenSideboxComponent
} from "../navbar-dialog/Screens/navbar-dialog-screen-sidebox/navbar-dialog-screen-sidebox.component";

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
    NavbarDialogCategoriesSectionComponent,
    NavbarDialogCategorySideboxComponent,
    NavbarDialogSidebarComponent,
    CommonModule,
    NavbarDialogScreensContentSectionComponent,
    NavbarDialogScreenSideboxComponent
  ],
  standalone: true,
  styleUrl: './navbar-search-dialog.component.css'
})
export class NavbarSearchDialogComponent {
  @Output() hover = new EventEmitter<buttonCategoryData | null>();
  @ViewChild('dialogRef') imageDialog!: ElementRef<HTMLDialogElement>;
  lastFiveSearches: string[] | null = null;
  buttonCategorySelected: buttonCategoryData | null = null;
  buttonScreenSelected: buttonScreensData | null = null;
  mode: SidebarSelected = "Trending";

  private readonly backdropClickHandler = (event: MouseEvent) => {
    const dialog = this.imageDialog?.nativeElement;
    if (dialog && event.target === dialog || event.target === dialog.querySelector('.img')) {
      dialog.close();
    }
  };

  constructor() {
    document.addEventListener("DOMContentLoaded", (event) => {
      const allItems = document.querySelectorAll("category-button");

      function activate(index = 0) {
        allItems.forEach((item) => item.classList.remove("active"));
        allItems[index].classList.add("active");
      }

      allItems.forEach((li, i) => {
        li.addEventListener("pointerenter", () => activate(i));
      });
    });
  }

  itsScreenHovering(button: buttonScreensData | null) {
    this.buttonScreenSelected = button;
  }

  itsCategoryHovering(button: buttonCategoryData | null) {
    this.buttonCategorySelected = button;

    /*
    // Adjust sidebox position based on button id
    // TODO: Account for the position of the user, this starts from lifestyle and upwards
    const sidebox = this.sideboxes[0] as HTMLElement;
    if (sidebox) {
      switch (button?.id) {
        case "1":
          sidebox.style.bottom = "39.5rem";
          break;
        case "2":
          sidebox.style.bottom = "37rem";
          break;
        case "3":
          sidebox.style.bottom = "34.5rem";
          break;
        case "4":
          sidebox.style.bottom = "32rem";
          break;
        case "5":
          sidebox.style.bottom = "29.5rem";
          break;
        case "6":
          sidebox.style.bottom = "27rem";
          break;
        case "7":
          sidebox.style.bottom = "24.5rem";
          break;
        case "8":
          sidebox.style.bottom = "22rem";
          break;
        case "9":
          sidebox.style.bottom = "19.5rem";
          break;
        case "10":
          sidebox.style.bottom = "17.5rem";
          break;
        case "11":
          sidebox.style.bottom = "18.7rem";
          break;
        case "12":
          sidebox.style.bottom = "16.2rem";
          break;
        case "13":
          sidebox.style.bottom = "17.5rem";
          break;
        case "14":
          sidebox.style.bottom = "17.5rem";
          break;
        case "15":
          sidebox.style.bottom = "16.2rem";
          break;
        case "16":
          sidebox.style.bottom = "18.7rem";
          break;
        case "17":
          sidebox.style.bottom = "18.5rem";
          break;
        case "18":
          sidebox.style.bottom = "17.3rem";
          break;
        case "19":
          sidebox.style.bottom = "18.7rem";
          break;
        case "20":
          sidebox.style.bottom = "17.5rem";
          break;

      }
    }
    */

  }

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

  changeMode(type: SidebarSelected | null) {
    if (type == null) {
      return;
    }
    this.mode = type
  }
}
