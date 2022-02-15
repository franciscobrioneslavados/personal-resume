import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviconService {

  constructor(
    private http: HttpClient
  ) { }

  public getListDevicons() {
    this.http.get('https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.json').toPromise();
  }
}
