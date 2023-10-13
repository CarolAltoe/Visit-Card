import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { Links } from './links-interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  links!: Links[];
  url = 'https://virtual-business-card-aacd3.web.app/';

  constructor(private linkService: LinkService) { }

  ngOnInit(){
    this.linkService.getLinks().subscribe(l => this.links = l);
  }

  copyToClipboard() {
    const linkToCopy = document.createElement('input');
    linkToCopy.value = this.url;
    document.body.appendChild(linkToCopy);

    linkToCopy.select();
    document.execCommand('copy');

    document.body.removeChild(linkToCopy);

    Swal.fire('Copyed with success!', '', 'success')
  }

  sendEmail(){
    Swal.fire({
      title: 'Surprise!',
      width: 600,
      padding: '3em',
      color: '#716add',
     // background: '#fff url(/assets/img/stars-changing-colors.gif) ',    url("/assets/img/nyan-cat-poptart-cat.gif") 
      backdrop: `
        rgba(0,0,123,0.4)
            
       
      `,
      html: './send-email.html'
    })
  }

  getPix() {
    Swal.fire({
      title: 'Pay me with pix!',
      input: 'text',
      inputValue: '7de600c4-753b-49c0-8fec-83f8fc27e8e9',
      inputAttributes: {
        id: 'inputToCopy'
      },
      imageUrl: '../assets/img/qrcode.jpeg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Pix key',
      showCancelButton: true,
      confirmButtonText: 'Copy',
      didOpen: () => {
        const inputElement = document.getElementById('inputToCopy') as HTMLInputElement;
        const copyButton = Swal.getConfirmButton();
  
        copyButton!.addEventListener('click', () => {
          inputElement.select();
          document.execCommand('copy');
          Swal.fire('Copied with success!', '', 'success');
        });
      }
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire('Key not copied!', '', 'info');
      }
    });
  }
 
  getSurprise() {
    Swal.fire({
      title: 'Surprise!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/assets/img/stars-changing-colors.gif) ',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/assets/img/nyan-cat-poptart-cat.gif")      
       
      `
    })
  }


}
 