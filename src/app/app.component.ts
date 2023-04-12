import { Component } from '@angular/core';
import {theme1} from './appdata/styledata'
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
themes:any= [theme1]
}
