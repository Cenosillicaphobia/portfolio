import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  set:any = '';
  iconList = ['html', 'css', 'angular', 'webpack', 'javascript', 'bootstrap', 'git', 'github', 'npm', 'ng-zorro', 'rxjs', 'firebase'];

  select(icon:string){
    this.set = icon 
  }

  randomIcon(){
    this.set = this.iconList[Math.floor(Math.random() * this.iconList.length)];
  }

  ngOnInit(): void {
    setInterval(() => {this.randomIcon()}, 3000); 
  }
  



}
