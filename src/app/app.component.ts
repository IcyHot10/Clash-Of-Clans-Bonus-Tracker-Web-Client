import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { MissingdataalertComponent } from "./missingdataalert/missingdataalert.component";
import { DUMMY_CLAN } from "./dummy_clan";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LeaderboardComponent, MissingdataalertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clash of Clans Bonus Tracker';
  clan = {};
  selected = false;

  onClanTagSelected(clanTag: string) {
    console.log(clanTag);
    this.selected = true;
    this.clan = clanTag === DUMMY_CLAN.clanTag ? DUMMY_CLAN : {};
  }
}
