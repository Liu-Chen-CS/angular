import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule, NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LiuchenDirective} from "./liuchen.directive";
import {SexPipe} from "./sex.pipe";

type Person = {
  name: string,
  age: number,
  gender: number,
};

type LoadActiveType = {
  backgroundColor: string,
  color: string,
  borderColor: string,
}

type noMoreStyleType = {
  color: string,
}

type buttonClass = {
  btn: boolean,
  'btn-danger': boolean,
  'btn-success': boolean,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, NgStyle, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, LiuchenDirective, SexPipe],
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
      gender: 1,
    },
    {
      name: "Lisa Guillard",
      age: 18,
      gender: 0,
    },
    {
      name: "BBC",
      age: 32,
      gender: 1,
    }];
  hasMore: boolean = true;
  LoadableStyle: LoadActiveType = {
    backgroundColor: "#383",
    color: "#fff",
    borderColor: "#252",
  };
  noMoreStyle: noMoreStyleType = {
    color: "aqua",
  }

  buttonClass: buttonClass = {
    btn: true,
    'btn-danger': false,
    'btn-success': true,
  };

  userLevel: string = "asdd";

  lover:string = "Lisa Guillard";

  password:string = "";

  msg:string = "please enter password";

  //functions
  increment(): void {
    this.age++;
  }

  decrement(): void {
    this.age--;
  }

  loadMore(): void {
    this.hasMore = false;
  }

  loadMore2():void{
    this.buttonClass = {
      btn: true,
      'btn-danger': true,
      'btn-success': false,
    }
  }

  handleViewChange():void{
    console.log(this.lover);
  }

  pwdChange():void{
    if(this.password.length < 6){
      this.msg = "password length less than 6";
    }
    else if(this.password.length > 12){
      this.msg = "password length greater than 12";
    }
    else{
      this.msg = "perfect";
    }
  }
}
