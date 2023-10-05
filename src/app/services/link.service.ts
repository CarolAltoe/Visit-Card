import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private links = 'assets/links.json'

  constructor(private http: HttpClient) { }

  getLinks(): Observable<any>{
    return this.http.get<any>(this.links);
  }
}
