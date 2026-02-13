import { Component } from '@angular/core';
import {screenData} from "../api.service";

@Component({
  selector: 'app-navbar-dialog-screens-content-section',
  standalone: true,
  templateUrl: './navbar-dialog-screens-content-section.component.html',
  imports: [

  ],
  styleUrl: './navbar-dialog-screens-content-section.component.css'
})
export class NavbarDialogScreensContentSectionComponent {

  screens: screenData[] | null = null;
  constructor() {

    this.screens = [
      {
        id: '1',
        title: 'New User Experience',
        buttons: [
          {
            id: '1',
            title: 'Account Setup',
            amount: '3,583',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/account-setup-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/account-setup-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/account-setup-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Account Setup screens guide users through the initial configuration of their profile and/or workspace.'
            }
          }
        ]
      }
    ];
  }
}
