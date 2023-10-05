import { Component } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { Links } from './links-interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  links!: Links[];
  //isDarkMode: boolean = false;

  constructor(private linkService: LinkService) { }

  ngOnInit(){
    this.linkService.getLinks().subscribe(l => this.links = l);
  }

 
}
 