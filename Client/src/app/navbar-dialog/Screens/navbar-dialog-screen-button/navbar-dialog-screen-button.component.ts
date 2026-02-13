import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buttonScreensData } from "../../../api.service";

@Component({
  selector: 'app-navbar-dialog-screen-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-dialog-screen-button.component.html',
  styleUrl: './navbar-dialog-screen-button.component.css'
})
export class NavbarDialogScreenButtonComponent {

  @Input() button: buttonScreensData | null = null;
  @Output() hover = new EventEmitter<buttonScreensData | null>();

  onEnter() {
    this.hover.emit(this.button);
  }

  onLeave() {
    this.hover.emit(null);
  }
}
