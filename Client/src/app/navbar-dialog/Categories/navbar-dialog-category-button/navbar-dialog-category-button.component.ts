import {Component, EventEmitter, Input, Output} from '@angular/core';
import {buttonData} from "../../../api.service";

@Component({
  selector: 'app-navbar-dialog-category-button',
  templateUrl: './navbar-dialog-category-button.component.html',
  styleUrl: './navbar-dialog-category-button.component.css',
  standalone: true
})
export class NavbarDialogCategoryButtonComponent {

  @Input() button: buttonData | null = null;
  @Output() hover = new EventEmitter<buttonData | null>();

  onEnter() {
    this.hover.emit(this.button);
  }

  onLeave() {
    this.hover.emit(null);
  }
}
