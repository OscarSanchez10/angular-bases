import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

public heroNames: string[] = ['Luffy','Zoro','Nami','Robin'];
public deletedHero?: string;

  removelasthero():void{
    this.deletedHero = this.heroNames.pop();
  }

}
