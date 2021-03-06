import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  readonly API_URL = `http://${environment.hostApi}`;  // Change this for local testing
  constructor(@Inject(DOCUMENT) private document: Document, private httpclient: HttpClient) { }
  get(uri: string) {
    return this.httpclient.get(`${this.API_URL}/${uri}`);
  }

  redirectBrowser(uri: string): void {
    console.log(`${this.API_URL}/${uri}`);
    this.document.location.href = `${this.API_URL}/${uri}`;
  }

}
