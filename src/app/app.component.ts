import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-gone',
  template: '<app-radio></app-radio>',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';
  show:boolean=false;
  k:any;n:number;b:number;c:any; d:any;j:number;h:any;i:number;f:any;m:any;e: any;
  abc()
  {
    
    if((this.n)>=18)
    {
     this.i=this.n; 
    }
    else
    {
    this.j=this.n;
    }
  }
  bd()
  {
 this.show=!this.show;

  }

}