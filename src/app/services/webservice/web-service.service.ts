import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  readonly API_URL = 'http://127.0.0.1:3000';
  constructor(@Inject(DOCUMENT) private document: Document, private httpclient: HttpClient) { }
  get(uri: string) {
    return this.httpclient.get(`${this.API_URL}/${uri}`);
  }

  redirectBrowser(uri: string): void {
    console.log(`${this.API_URL}/${uri}`);
    this.document.location.href = `${this.API_URL}/${uri}`;
  }

}
