import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiKey = "re_8PZfDeAf_41TRAuuknLqniDUtG6td16NS";

  constructor(private http: HttpClient) { }

  sendEmail(email: any){

    const url = 'https://api.resend.com/emails'; 
    console.log("success service", email)

    //const teste = this.apiKey.sendEmail()



    return this.http.post(email,'');
  }
}
