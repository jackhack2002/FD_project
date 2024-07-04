import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-image',
  templateUrl: './get-image.component.html',
  styleUrls: ['./get-image.component.scss']
})
export class GetImageComponent {
  constructor(private router:Router){}
  

  upload(){
    this.router.navigate(['view-image'])
  }
}
