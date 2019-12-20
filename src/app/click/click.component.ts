import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent implements OnInit {

  constructor() { }
  myEvent(event) {
    console.log(event);
    
  }
  isCollapsed: boolean = true;
  toggleCollapse()
 {
   this.isCollapsed = !this.isCollapsed
 }  ngOnInit() {
  }

}
