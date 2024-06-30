import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule, NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LiuchenDirective} from "./liuchen.directive";
import {SexPipe} from "./sex.pipe";
import {LogService} from "./log.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MyHome} from "./home/myHome.component";
import {About} from "./about/about.component";

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

type Fact = {
  id: string,
  type: string,
  attributes: {
    body: string,
  },
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, NgStyle, NgClass,
    NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule,
    LiuchenDirective, SexPipe, HttpClientModule,
    MyHome, About, RouterLink,
  ],
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

  funFact: Fact[] = [];

  userLevel: string = "asdd";

  lover: string = "Lisa Guillard";

  password: string = "";

  msg: string = "please enter password";

  log?: LogService;
  http?: HttpClient;

  price:number = 199.89;

  router?:Router;

  constructor(log: LogService, http: HttpClient, router:Router) {
    this.log = log;
    this.http = http;
    this.router = router;
  }

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

  loadMore2(): void {
    this.buttonClass = {
      btn: true,
      'btn-danger': true,
      'btn-success': false,
    }
  }

  handleViewChange(): void {
    console.log(this.lover);
  }

  pwdChange(): void {
    if (this.password.length < 6) {
      this.msg = "password length less than 6";
    } else if (this.password.length > 12) {
      this.msg = "password length greater than 12";
    } else {
      this.msg = "perfect";
    }
  }

  addItem(): void {
    this.log?.doAction("adding");
  }

  deleteItem(): void {
    this.log?.doAction("deleting");
  }

  getFunFact(): void {
    const url: string = "https://dogapi.dog/api/v2/facts";
    this.http?.get(url).subscribe((res) => {
      // @ts-ignore
      this.funFact = res.data;
    });
    console.log(this.funFact[0]?.attributes.body);
  }

  doCry(e:string){
    this.name = e;
  }

  jump(name:string, age:number) {
    this.router?.navigateByUrl(`/about?name=${name}&age=${age}`);
  }
}
