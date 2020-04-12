import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { WebServiceService } from '../services/webservice/web-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private webservice: WebServiceService) {
    this.matIconRegistry.addSvgIcon(
      'google_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/glogo.svg')
    );
  }
  ngOnInit() {
  }

  public googlelogin() {
    console.log('clickedlkjdsflksajflkdsjfdlkfjslkjslkfjlkfjslkdfjsdlkfj');
    return this.webservice.redirectBrowser('auth/google');
  }
}

// <h2>My Heroes</h2>

// <ul class="heroes">
//   <li *ngFor="let hero of heroes"
//     [class.selected]="hero === selectedHero"
//     (click)="onSelect(hero)">
//     <span class="badge">{{hero.id}}</span> {{hero.name}}
//   </li>
// </ul>

// <app-hero-detail [hero]="selectedHero"></app-hero-detail>
