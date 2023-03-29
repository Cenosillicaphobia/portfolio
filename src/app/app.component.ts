import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Andrea Tommasini Portfolio';

  background:boolean = true

  setBackground(type:boolean){
    this.background = type;
  }
}
