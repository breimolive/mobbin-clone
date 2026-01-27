import { Component, OnInit } from '@angular/core';

interface iconDto {

  id: number;
  name: string;
  logoUrl: string;
}

@Component({
  selector: 'app-navbar-dialog-icon-section',
  templateUrl: './navbar-dialog-icon-section.component.html',
  styleUrl: './navbar-dialog-icon-section.component.css'
})
export class NavbarDialogIconSectionComponent implements OnInit {

  PreIconList: iconDto[] = [
    { id: 1, name: 'Revolut', logoUrl: 'assets/navbar/dialog/icons/revolut.png' },
    { id: 2, name: 'Cal AI', logoUrl: 'assets/navbar/dialog/icons/calAI.png' },
    { id: 3, name: 'Spotify', logoUrl: 'assets/navbar/dialog/icons/spotify.png' },
    { id: 4, name: 'Strava', logoUrl: 'assets/navbar/dialog/icons/strava.png' },
    { id: 5, name: 'Wise', logoUrl: 'assets/navbar/dialog/icons/wise.png' },
    { id: 6, name: 'Cashapp', logoUrl: 'assets/navbar/dialog/icons/cashapp.png' },
    { id: 7, name: 'Airbnb', logoUrl: 'assets/navbar/dialog/icons/airbnb.png' },
  ];

  displayedIcons: iconDto[] = [];
  private readonly targetCount = 7;

  ngOnInit(): void {
    this.fillDisplayedIcons(this.targetCount);
  }

  private fillDisplayedIcons(count: number) {
    if (!this.PreIconList || this.PreIconList.length === 0) {
      this.displayedIcons = [];
      return;
    }

    const shuffled = this.shuffleArray(this.PreIconList.slice());
    const take = Math.min(count, shuffled.length);
    this.displayedIcons = shuffled.slice(0, take);
  }

  private shuffleArray<T>(arr: T[]): T[] {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
