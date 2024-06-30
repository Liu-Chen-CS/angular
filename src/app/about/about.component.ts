import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: "About",
  standalone: true,
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
  imports: [
    FormsModule
  ]
})
export class About implements OnInit{
  name: string = "Big Black Cock";

  route:ActivatedRoute | null = null;

  age:number = 0;

  @Output()
  private cryEvent = new EventEmitter();

  constructor(route: ActivatedRoute) {
    this.route=route;
  }

  public giveFather():void{
    this.cryEvent.emit(this.name);
  }

  ngOnInit() {
    this.route?.queryParams.subscribe((data) => {
      this.name = data[`name`];
      this.age += data[`age`];
    })
    this.route?.params.subscribe((data  )=>{
      console.log(data);
    })
  }
}
