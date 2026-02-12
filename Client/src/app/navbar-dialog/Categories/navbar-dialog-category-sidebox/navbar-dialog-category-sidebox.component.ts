import {Component, Input} from '@angular/core';
import {buttonData} from "../../../api.service";

@Component({
  selector: 'app-navbar-dialog-category-sidebox',
  templateUrl: './navbar-dialog-category-sidebox.component.html',
  standalone: true,
  styleUrl: './navbar-dialog-category-sidebox.component.css'
})
export class NavbarDialogCategorySideboxComponent {

  @Input() button: buttonData | null = null;
}
