import {Component, EventEmitter, Output} from '@angular/core';
import {
  NavbarDialogCategoryButtonComponent
} from "../navbar-dialog-category-button/navbar-dialog-category-button.component";
import buttonCategoryData from "../../../api.service";

@Component({
  selector: 'app-navbar-dialog-categories-section',
  templateUrl: './navbar-dialog-categories-section.component.html',
  imports: [
    NavbarDialogCategoryButtonComponent
  ],
  standalone: true,
  styleUrl: './navbar-dialog-categories-section.component.css'
})
export class NavbarDialogCategoriesSectionComponent {

  buttons: buttonCategoryData[] | null = null;
  @Output() clicked = new EventEmitter();

  onHover(button: buttonCategoryData | null) {
    this.clicked.emit(button);
  }

  constructor() {
    this.buttons = [
      {
        id: '1',
        title: 'AI',
        amount: '32',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/ai-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/ai-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/ai-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/ai-category-secondary-sub.png',
          description: 'Artificial Intelligence (AI) apps provide users with AI-powered solutions to their everyday tasks and problems.',
          primaryPhotoAlt: "ChatGPT interface showing a conversation about AI apps",
          secondaryPhotoAlt: "CREME interface showing a conversation about AI apps",
          PrimarySubPhotoAlt: "ChatGPT Logo",
          secondarySubPhotoAlt: "Creme Logo"
        }
      },
      {
        id: '2',
        title: 'Business',
        amount: '29',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/business-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/business-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/business-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/business-category-secondary-sub.png',
          description: 'Business apps assist with running a business or provide a means to collaborate, edit, or share content.',
          primaryPhotoAlt: "Shopify interface showing a conversation about Business apps",
          secondaryPhotoAlt: "Slack interface showing a conversation about Business apps",
          PrimarySubPhotoAlt: "Shopify Logo",
          secondarySubPhotoAlt: "Slack Logo"
        }
      },
      {
        id: '3',
        title: 'Collaboration',
        amount: '11',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/collaboration-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/collaboration-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/collaboration-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/collaboration-category-secondary-sub.png',
          description: 'Collaboration apps provide a platform for multiple users to collaborate, communicate, and interact in real-time.',
          primaryPhotoAlt: "Slack interface showing a conversation about Collaboration apps",
          secondaryPhotoAlt: "Notion interface showing a conversation about Collaboration apps",
          PrimarySubPhotoAlt: "Slack Logo",
          secondarySubPhotoAlt: "Notion Logo"
        }
      },
      {
        id: '4',
        title: 'Communication',
        amount: '14',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/communication-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/communication-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/communication-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/communication-category-secondary-sub.png',
          description: 'Communication apps allow users to communicate with others by text, voice, or video.',
          primaryPhotoAlt: "Discord interface showing a conversation about Communication apps",
          secondaryPhotoAlt: "Zoom interface showing a conversation about Communication apps",
          PrimarySubPhotoAlt: "Discord Logo",
          secondarySubPhotoAlt: "Zoom Logo"
        }
      },
      {
        id: '5',
        title: 'CRM',
        amount: '5',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/crm-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/crm-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/crm-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/crm-category-secondary-sub.png',
          description: 'Customer Relationship Management (CRM) apps help businesses manage and analyze customer interactions and data throughout the customer lifecycle.',
          primaryPhotoAlt: "Shopify interface showing a conversation about CRM apps",
          secondaryPhotoAlt: "Salesforce interface showing a conversation about CRM apps",
          PrimarySubPhotoAlt: "Shopify Logo",
          secondarySubPhotoAlt: "Salesforce Logo"
        }
      },
      {
        id: '6',
        title: 'Crypto & Web3',
        amount: '24',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/crypto-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/crypto-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/crypto-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/crypto-category-secondary-sub.png',
          description: 'Crypto & Web3 apps provide users with access to cryptocurrencies, blockchain-based platforms, and decentralized applications.',
          primaryPhotoAlt: "Revolut interface showing a conversation about Crypto apps",
          secondaryPhotoAlt: "Binance interface showing a conversation about Crypto apps",
          PrimarySubPhotoAlt: "Revolut Logo",
          secondarySubPhotoAlt: "Binance Logo"
        }
      },
      {
        id: '7',
        title: 'Developer Tools',
        amount: '3',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/developer-tools-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/developer-tools-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/developer-tools-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/developer-tools-category-secondary-sub.png',
          description: 'Developer Tools apps provide tools for app development, management, and distribution.',
          primaryPhotoAlt: "GitHub interface showing a conversation about Developer Tools apps",
          secondaryPhotoAlt: "GitLab interface showing a conversation about Developer Tools apps",
          PrimarySubPhotoAlt: "GitHub Logo",
          secondarySubPhotoAlt: "GitLab Logo"
        }
      },
      {
        id: '8',
        title: 'Education',
        amount: '33',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/education-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/education-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/education-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/education-category-secondary-sub.png',
          description: 'Education apps provide an interactive learning experience on a specific skill or subject.',
          primaryPhotoAlt: "Duolingo interface showing a conversation about Education apps",
          secondaryPhotoAlt: "Duolingo interface showing a conversation about Education apps",
          PrimarySubPhotoAlt: "Duolingo Logo",
          secondarySubPhotoAlt: "M Logo"
        }
      },
      {
        id: '9',
        title: 'Entertainment',
        amount: '39',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/entertainment-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/entertainment-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/entertainment-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/entertainment-category-secondary-sub.png',
          description: 'Entertainment apps are interactive and designed to entertain and inform the user, and which contain audio, visual, or other content.',
          primaryPhotoAlt: "Tiktok interface showing a conversation about Entertainment apps",
          secondaryPhotoAlt: "Twitch interface showing a conversation about Entertainment apps",
          PrimarySubPhotoAlt: "Tiktok Logo",
          secondarySubPhotoAlt: "Twitch Logo"
        }
      },
      {
        id: '10',
        title: 'Finance',
        amount: '96',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/crypto-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/finance-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/crypto-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/finance-category-secondary-sub.png',
          description: 'Finance apps perform financial transactions or assist the user with business or personal financial matters.',
          primaryPhotoAlt: "Revolut interface showing a conversation about Finance apps",
          secondaryPhotoAlt: "Klarna interface showing a conversation about Finance apps",
          PrimarySubPhotoAlt: "Revolut Logo",
          secondarySubPhotoAlt: "Klarna Logo"
        }
      },
      {
        id: '11',
        title: 'Food & Drink',
        amount: '68',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/food-drinks-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/food-drinks-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/food-drinks-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/food-drinks-category-secondary-sub.png',
          description: 'Food & Drink apps provide recommendations, instruction, or critique related to the preparation, consumption, or review of food or beverages.',
          primaryPhotoAlt: "Moto interface showing a conversation about Food & Drink apps",
          secondaryPhotoAlt: "Grab interface showing a conversation about Food & Drink apps",
          PrimarySubPhotoAlt: "Moto Logo",
          secondarySubPhotoAlt: "Grab Logo"
        }
      },
      {
        id: '12',
        title: 'Graphics & Design',
        amount: '7',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/graphics-design-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/graphics-design-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/graphics-design-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/graphics-design-category-secondary-sub.png',
          description: 'Graphics & Design apps provide tools for art, design, and graphics creation.',
          primaryPhotoAlt: "Canva interface showing a conversation about Graphics & Design apps",
          secondaryPhotoAlt: "Undo interface showing a conversation about Graphics & Design apps",
          PrimarySubPhotoAlt: "Canva Logo",
          secondarySubPhotoAlt: "Undo Logo"
        }
      },
      {
        id: '13',
        title: 'Health & Fitness',
        amount: '87',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/health-fitness-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/health-fitness-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/health-fitness-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/health-fitness-category-secondary-sub.png',
          description: 'Health & Fitness apps provide users with tools to track, analyze, and improve their health and fitness.',
          primaryPhotoAlt: "hims interface showing a conversation about Health & Fitness apps",
          secondaryPhotoAlt: "Strava interface showing a conversation about Health & Fitness apps",
          PrimarySubPhotoAlt: "hims Logo",
          secondarySubPhotoAlt: "Strava Logo"
        }
      },
      {
        id: '14',
        title: 'Jobs & Recruitment',
        amount: '7',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/jobs-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/jobs-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/jobs-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/jobs-category-secondary-sub.png',
          description: 'Jobs & Recruitment apps enable search and online application for job openings, matching job seekers with employers.',
          primaryPhotoAlt: "LinkedIn interface showing a conversation about Jobs & Recruitment apps",
          secondaryPhotoAlt: "Indeed interface showing a conversation about Jobs & Recruitment apps",
          PrimarySubPhotoAlt: "LinkedIn Logo",
          secondarySubPhotoAlt: "Indeed Logo"
        }
      },
      {
        id: '15',
        title: 'Lifestyle',
        amount: '65',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/health-fitness-category-secondary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/lifestyle-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/health-fitness-category-secondary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/lifestyle-category-secondary-sub.png',
          description: 'Lifestyle apps are related to a general-interest subject matter or service.',
          primaryPhotoAlt: "Pinterest interface showing a conversation about Lifestyle apps",
          secondaryPhotoAlt: "Etsy interface showing a conversation about Lifestyle apps",
          PrimarySubPhotoAlt: "Pinterest Logo",
          secondarySubPhotoAlt: "Etsy Logo"
        }
      },
      {
        id: '16',
        title: 'Medical',
        amount: '8',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/health-fitness-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/medical-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/health-fitness-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/medical-category-secondary-sub.png',
          description: 'Medical apps are focused on medical education, information management, or health reference for patients or healthcare professionals.',
          primaryPhotoAlt: "WebMD interface showing a conversation about Medical apps",
          secondaryPhotoAlt: "Mayo Clinic interface showing a conversation about Medical apps",
          PrimarySubPhotoAlt: "WebMD Logo",
          secondarySubPhotoAlt: "Mayo Clinic Logo"
        }
      },
      {
        id: '17',
        title: 'Music & Audio',
        amount: '34',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/music-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/music-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/music-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/music-category-secondary-sub.png',
          description: 'Music & Audio apps are for discovering, listening to, recording, performing, or composing music, and that are interactive in nature.',
          primaryPhotoAlt: "Spotify interface showing a conversation about Music & Audio apps",
          secondaryPhotoAlt: "SoundCloud interface showing a conversation about Music & Audio apps",
          PrimarySubPhotoAlt: "Spotify Logo",
          secondarySubPhotoAlt: "SoundCloud Logo"
        }
      },
      {
        id: '18',
        title: 'Maps & Navigation',
        amount: '10',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/maps-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/maps-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/maps-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/maps-category-secondary-sub.png',
          description: 'Maps & Navigation apps provide information to help a user travel to a physical location.',
          primaryPhotoAlt: "Google Maps interface showing a conversation about Maps & Navigation apps",
          secondaryPhotoAlt: "Waze interface showing a conversation about Maps & Navigation apps",
          PrimarySubPhotoAlt: "Google Maps Logo",
          secondarySubPhotoAlt: "Waze Logo"
        }
      },
      {
        id: '19',
        title: 'News',
        amount: '44',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/music-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/news-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/music-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/news-category-secondary-sub.png',
          description: 'News apps provide information about current events or developments in areas of interest such as politics, entertainment, business, science, technology, and so on.',
          primaryPhotoAlt: "CNN interface showing a conversation about News apps",
          secondaryPhotoAlt: "BBC interface showing a conversation about News apps",
          PrimarySubPhotoAlt: "CNN Logo",
          secondarySubPhotoAlt: "BBC Logo"
        }
      },
      {
        id: '20',
        title: 'Photo & Video',
        amount: '37',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/video-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/lifestyle-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/video-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/lifestyle-category-secondary-sub.png',
          description: 'Photo & Video apps provide tools for photo and video creation, editing, sharing, or storage.',
          primaryPhotoAlt: "Instagram interface showing a conversation about Photo & Video apps",
          secondaryPhotoAlt: "YouTube interface showing a conversation about Photo & Video apps",
          PrimarySubPhotoAlt: "Instagram Logo",
          secondarySubPhotoAlt: "YouTube Logo"
        }
      },
      {
        id: '21',
        title: 'Productivity',
        amount: '58',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/ai-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/productivity-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/ai-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/productivity-category-secondary-sub.png',
          description: 'Productivity apps make a specific process or task more organized or efficient.',
          primaryPhotoAlt: "ChatGPT interface showing a conversation about Productivity apps",
          secondaryPhotoAlt: "Claude interface showing a conversation about Productivity apps",
          PrimarySubPhotoAlt: "ChatGPT Logo",
          secondarySubPhotoAlt: "Claude Logo"
        }
      },
      {
        id: '22',
        title: 'Real Estate',
        amount: '9',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/real-estate-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/real-estate-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/real-estate-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/real-estate-category-secondary-sub.png',
          description: 'Real Estate apps provide users a platform to search, buy, sell, or rent real estate properties.',
          primaryPhotoAlt: "Airbnb interface showing a conversation about Real Estate apps",
          secondaryPhotoAlt: "Zillow interface showing a conversation about Real Estate apps",
          PrimarySubPhotoAlt: "Airbnb Logo",
          secondarySubPhotoAlt: "Unknown Logo"
        }
      },
      {
        id: '23',
        title: 'Reference',
        amount: '8',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/reference-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/reference-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/reference-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/reference-category-secondary-sub.png',
          description: 'Reference apps assist the user in accessing or retrieving information.',
          primaryPhotoAlt: "Unknown interface showing a conversation about Reference apps",
          secondaryPhotoAlt: "Unknown interface showing a conversation about Reference apps",
          PrimarySubPhotoAlt: "Unknown Logo",
          secondarySubPhotoAlt: "Unknown Logo"
        }
      },
      {
        id: '24',
        title: 'Shopping',
        amount: '100',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/finance-category-secondary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/food-drinks-category-primary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/finance-category-secondary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/food-drinks-category-primary-sub.png',
          description: 'Shopping apps provide a platform for users to browse and purchase products or services.',
          primaryPhotoAlt: "Amazon interface showing a conversation about Shopping apps",
          secondaryPhotoAlt: "Unknown interface showing a conversation about Shopping apps",
          PrimarySubPhotoAlt: "Klarna Logo",
          secondarySubPhotoAlt: "Unknown Logo"
        }
      },
      {
        id: '25',
        title: 'Social Networking',
        amount: '77',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/video-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/music-category-primary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/video-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/music-category-primary-sub.png',
          description: 'Social Networking apps connect people by means of text, voice, photo, or video. Apps that contribute to community development.',
          primaryPhotoAlt: "Facebook interface showing a conversation about Social Networking apps",
          secondaryPhotoAlt: "Twitter interface showing a conversation about Social Networking apps",
          PrimarySubPhotoAlt: "Facebook Logo",
          secondarySubPhotoAlt: "Twitter Logo"
        }
      },
      {
        id: '26',
        title: 'Sports',
        amount: '17',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/sports-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/categories/sports-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/sports-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/categories/sports-category-secondary-sub.png',
          description: 'Sports apps are related to professional, amateur, collegiate, or recreational sporting activities.',
          primaryPhotoAlt: "ESPN interface showing a conversation about Sports apps",
          secondaryPhotoAlt: "Bleacher Report interface showing a conversation about Sports apps",
          PrimarySubPhotoAlt: "ESPN Logo",
          secondarySubPhotoAlt: "Bleacher Report Logo"
        }
      },
      {
        id: '27',
        title: 'Travel & Transportation',
        amount: '55',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/real-estate-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/travel-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/real-estate-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/travel-category-secondary-sub.png',
          description: 'Travel & Transportation apps assist the user with any aspect of travel, such as planning, purchasing, or tracking.',
          primaryPhotoAlt: "Airbnb interface showing a conversation about Travel apps",
          secondaryPhotoAlt: "Uber interface showing a conversation about Travel apps",
          PrimarySubPhotoAlt: "Airbnb Logo",
          secondarySubPhotoAlt: "Uber Logo"
        }
      },
      {
        id: '28',
        title: 'Utilities',
        amount: '24',
        category: {
          primaryPhoto: 'assets/navbar/dialog/categories/reference-category-primary.png',
          secondaryPhoto: 'assets/navbar/dialog/categories/utilities-category-secondary.png',
          primarySubPhoto: 'assets/navbar/dialog/categories/reference-category-primary-sub.png',
          secondarySubPhoto: 'assets/navbar/dialog/categories/utilities-category-secondary-sub.png',
          description: 'Utilities apps enable the user to solve a problem or complete a specific task.',
          primaryPhotoAlt: "Unknown interface showing a conversation about Travel apps",
          secondaryPhotoAlt: "Unknown interface showing a conversation about Travel apps",
          PrimarySubPhotoAlt: "Unknown Logo",
          secondarySubPhotoAlt: "Unknown Logo"
      }
      }
    ]
  }
}
