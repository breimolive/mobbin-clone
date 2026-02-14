import {Component, Input} from '@angular/core';
import {buttonScreensData} from "../../../api.service";

@Component({
  selector: 'app-navbar-dialog-screen-sidebox',
  standalone: true,
  templateUrl: './navbar-dialog-screen-sidebox.component.html',
  styleUrl: './navbar-dialog-screen-sidebox.component.css'
})
export class NavbarDialogScreenSideboxComponent {
  @Input() button: buttonScreensData | null = null;
}
