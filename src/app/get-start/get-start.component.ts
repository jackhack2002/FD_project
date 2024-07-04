import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-start',
  templateUrl: './get-start.component.html',
  styleUrls: ['./get-start.component.scss']
})
export class GetStartComponent {

  constructor(private router:Router){}
  

  click(){
    this.router.navigate(['image-collection'])
  }
}
