import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      from: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      to: ["semprecheiadegraca@gmail.com"],
      subject: [null],
      message: [null, Validators.required]
    })
  };

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm("service_eo861pf", "template_71bg817",
      e.target as HTMLFormElement, 'Tx1SI6fTY6Obipi8Y')
      .then((result: EmailJSResponseStatus) => {
        Swal.fire('Email successfully sent!', '', 'success');
        console.log(result.text);
        console.log(this.form);
        this.resert();
      }, (error: any) => {
        Swal.fire('Error sending email.!', '', 'error');
        console.log(error.text);
      });
    console.log(this.form);
  }

  resert(){
    this.form.reset();
  }

  verifyTouchedValid(campo: any) {
    return !this.form.get(campo)?.valid && this.form.get(campo)?.touched;
  }

  addStyleError(campo: any) {
    return {
      'error': this.verifyTouchedValid(campo),
    }
  };

}
