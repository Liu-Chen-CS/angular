import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgIf, NgStyle} from "@angular/common";

type Person = {
  name: string,
  age: number,
};

type LoadActiveType = {
  backgroundColor: string,
  color:string,
  borderColor:string,
}

type noMoreStyleType = {
  color: string,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'angular';
  name: string = "Liu Chen";
  age: number = 28;
  list: Person[] = [
    {
      name: "Liu Chen",
      age: 28,
    },
    {
      name: "Lisa Guillard",
      age: 18,
    },
    {
      name: "BBC",
      age: 32,
    }];
  hasMore:boolean = true;
  LoadableStyle:LoadActiveType = {
    backgroundColor: "#383",
    color: "#fff",
    borderColor: "#252",
  };
  noMoreStyle:noMoreStyleType = {
    color: "aqua",
  }

  increment(): void {
    this.age++;
  }

  decrement(): void {
    this.age--;
  }
  loadMore():void{
    this.hasMore = false;
  }
}
