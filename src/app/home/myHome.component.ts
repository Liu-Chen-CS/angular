import {Component, Input} from "@angular/core";

@Component({
  selector: 'MyHome',
  standalone: true,
  templateUrl: "./myHome.component.html",
  styleUrl: "./myHome.component.css",
})
export class MyHome{
  @Input()
  homePrice:number | undefined;
}
