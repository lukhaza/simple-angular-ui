import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    console.log(this.domSanitizer.bypassSecurityTrustResourceUrl('https://commons.wikimedia.org/wiki/File:Google_"G"_Logo.svg'));
    this.matIconRegistry.addSvgIcon(
      "google_logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/glogo.svg')
    );
  }
  ngOnInit() {
  }

}
