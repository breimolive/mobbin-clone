import { Component } from '@angular/core';
import { screenData } from "../api.service";
import { CommonModule } from "@angular/common";
import {
  NavbarDialogScreenButtonComponent
} from "../navbar-dialog-screen-button/navbar-dialog-screen-button.component";


@Component({
  selector: 'app-navbar-dialog-screens-content-section',
  standalone: true,
  templateUrl: './navbar-dialog-screens-content-section.component.html',
  imports: [

    NavbarDialogScreenButtonComponent

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
          },
          {
            id: '2',
            title: 'Guided Tour & Tutorials',
            amount: '672',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/guided-tour-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/guided-tour-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/guided-tour-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Guided Tour & Tutorial provides step-by-step instructions that guide first-time users through an apps interface and functions.'
            }
          },
          {
            id: '3',
            title: 'Splash Screens',
            amount: '1,095',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/splash-screens-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/splash-screens-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/splash-screens-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'Instagram image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Splash Screen is the initial screen displayed when the app first launches.'
            }
          },
          {
            id: '4',
            title: 'Signup',
            amount: '1,292',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/signup-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/signup-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/signup-tertiary.png',
              primaryPhotoAlt: 'Apple image',
              secondaryPhotoAlt: 'Vimeo image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Signup screens allow users to create a new account.'
            }
          },
          {
            id: '5',
            title: 'Verification',
            amount: '1,554',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/verification-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/verification-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/verification-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'Disney+ image',
              description: 'Verification screens prompt users to confirm their account or identity.'
            }
          },
          {
            id: '6',
            title: 'Welcome & Get Started',
            amount: '2,394',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/welcome-get-started-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/welcome-get-started-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/welcome-get-started-tertiary.png',
              primaryPhotoAlt: 'Discord image',
              secondaryPhotoAlt: 'Strava image',
              tertiaryPhotoAlt: 'FarFetch image',
              description: 'Welcome & Get Started screens prompt users to start using the app.'
            }
          }
        ]
      },
      {
        id: '2',
        title: 'Account Management',
        buttons: [
          {
            id: '1',
            title: 'Delete & Deactivate Account',
            amount: '302',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/delete-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/delete-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/delete-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'Revolut image',
              description: 'Delete & Deactivate Account screens allow users to delete or deactivate their account.'
            }
          },
          {
            id: '2',
            title: 'Forgot Password',
            amount: '151',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/forgot-password-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/forgot-password-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/forgot-password-tertiary.png',
              primaryPhotoAlt: 'Mobbin image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Forgot Password screens allow users to reset their password.'
            }
          },
          {
            id: '3',
            title: 'Login',
            amount: '1,792',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/login-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/login-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/login-tertiary.png',
              primaryPhotoAlt: 'Disney+ image',
              secondaryPhotoAlt: 'Cleo image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Login screens allow users to sign in with an existing account.'
            }
          },
          {
            id: '4',
            title: 'My Account & Profile',
            amount: '2,192',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/my-account-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/my-account-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/my-account-tertiary.png',
              primaryPhotoAlt: 'Mobbin image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'Linkedin image',
              description: 'My Account & Profile screens display an overview of the user’s profile.'
            }
          },
          {
            id: '5',
            title: 'Settings & Preferences',
            amount: '5,958',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/settings-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/settings-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/settings-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'Disney+ image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Settings & Preferences screens allow users to customize their experience.'
            }
          }
        ]
      },
      {
        id: '3',
        title: 'Communication',
        buttons: [
          {
            id: '1',
            title: 'About',
            amount: '80',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/about-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/about-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/about-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'Moleskine image',
              description: 'About screens display technical app information.'
            }
          },
          {
            id: '2',
            title: 'Acknowledgment & Success',
            amount: '5,878',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/acknowledgment-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/acknowledgment-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/acknowledgment-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Acknowledgment & Success screens confirm a successful action or process.'
            }
          },
          {
            id: '3',
            title: 'Action Option',
            amount: '972',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/action-option-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/action-option-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/action-option-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Action Option screens prompt users to take a specific action.'
            }
          },
          {
            id: '4',
            title: 'Confirmation',
            amount: '2,403',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/confirmation-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/confirmation-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/confirmation-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Confirmation screens ask users to confirm an action or decision.'
            }
          },
          {
            id: '5',
            title: 'Empty State',
            amount: '2.953',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/empty-state-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/empty-state-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/empty-state-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Empty State screens are displayed when there is no content to show.'
            }
          },
          {
            id: '6',
            title: 'Error',
            amount: '1,276',
            category: {
              primaryPhoto: 'assets/navbar/dialog/screens/error-primary.png',
              secondaryPhoto: 'assets/navbar/dialog/screens/error-secondary.png',
              tertiaryPhoto: 'assets/navbar/dialog/screens/error-tertiary.png',
              primaryPhotoAlt: 'unknown image',
              secondaryPhotoAlt: 'unknown image',
              tertiaryPhotoAlt: 'unknown image',
              description: 'Error screens inform users of an issue or problem.'
            }
          }
        ],
      }
    ];
  }
}
