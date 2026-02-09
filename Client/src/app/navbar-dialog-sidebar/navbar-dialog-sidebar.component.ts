import {Component, EventEmitter, Output} from '@angular/core';

type SidebarSelected = 'Trending' | 'Categories' | 'Screens' | 'UI Elements' | 'Flows';

@Component({
  selector: 'app-navbar-dialog-sidebar',
  templateUrl: './navbar-dialog-sidebar.component.html',
  standalone: true,
  styleUrl: './navbar-dialog-sidebar.component.css'
})
class NavbarDialogSidebarComponent {

  @Output() modeSelected = new EventEmitter<SidebarSelected>();
  buttons = document.getElementsByClassName('sidebar-button');

  changeMode(value: SidebarSelected): void {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', () => {
        this.check();
        this.buttons[i].classList.toggle('selected');
      });
    }
    this.modeSelected.emit(value);
  }

  check(): void {
    const elements = document.querySelectorAll('.selected');
    elements.forEach(element => {
      element.classList.remove('selected');
    });
  }
}

export default NavbarDialogSidebarComponent
