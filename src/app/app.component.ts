import { NgxSpinner, Spinner } from './../../node_modules/ngx-spinner/lib/ngx-spinner.enum.d';
import { Component, inject, Injectable } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { MissingdataalertComponent } from "./missingdataalert/missingdataalert.component";
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from '../environments/environment';

interface Clan {
  state: 'LOADING' | 'SUCCESS' | 'ERROR' | 'NON-CWL' | 'UNSELECTED' | 'NO-CLAN' | 'RATE-LIMITED';
  clanName?: string;
  clanLogo?: string;
  leaderboard?: any[];
}

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LeaderboardComponent, MissingdataalertComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clash of Clans Bonus Tracker';
  clan: Clan = { state: 'UNSELECTED' };
  selected = false;
  private http = inject(HttpClient)
  base_url = environment.BASE_URL;


  onClanTagSelected(clanTag: string) {
    if (this.clan.state != 'LOADING'){
      if (clanTag == ""){
        this.clan.state = 'UNSELECTED'
      }
      else {
        console.log(clanTag);
        this.clan = {'state': 'LOADING'};
        this.selected = true;
        this.http.get<Clan>(this.base_url+clanTag.replace('#','%23')).subscribe(config => {
          console.log(config);
          this.clan = config;
        })
      }
    }

  }
}
