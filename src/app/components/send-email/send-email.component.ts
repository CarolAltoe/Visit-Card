import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import  emailjs, { EmailJSResponseStatus }  from '@emailjs/browser';



@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {

  form!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      from: ["semprecheiadegraca@gmail.com"],
      name: [null, [Validators.required]],
      to: [null, [Validators.required, Validators.email]],
      subject: [null],
      message: [null, Validators.required],
      reply_to:  ["semprecheiadegraca@gmail.com"],
    })
  }

  verifyTouchedValid(campo: any){
    return !campo.valid && campo.touched
  }

  addStyleError(campo: any){
    return {
      'has-error': this.verifyTouchedValid(campo),
      'has-feedback': this.verifyTouchedValid(campo)
    }
  }


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm("service_eo861pf","template_71bg817",
      e.target as HTMLFormElement, 'Tx1SI6fTY6Obipi8Y')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          console.log("eeeeeeeeeeeeeeee")
        }, (error: any) => {
          console.log("eeerooouuuuu")
          console.log(error.text);
        });
  }
}
