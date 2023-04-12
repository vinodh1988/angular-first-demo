import { Component } from '@angular/core';
import {theme1, theme2} from './appdata/styledata'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ABC Private Limited';
  services:string[] =
  [ "Application Services", 
  "Testing Services",
  "Cloud Services",
]
//themes:any= [theme1, theme2]
currentheme = theme1
currentfont:string = "Courier"
changeTheme(theme:string):void{

  
   this.currentheme = theme=="theme1"? theme1: theme2;
}
}
