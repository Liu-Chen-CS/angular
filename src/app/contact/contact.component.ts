import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Route} from "@angular/router";


@Component({
  selector: "app-contact",
  standalone: true,
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class Contact implements OnInit {
  content: string = "Contact works!!!";

  id: string = "";

  name: string = "";

  age: number = 0;

  route?: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit() {
    this.route?.params.subscribe((data): void => {
      this.id = data[`id`]
    })
  }
}
