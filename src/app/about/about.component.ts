import {Component, EventEmitter, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "About",
  standalone: true,
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
  imports: [
    FormsModule
  ]
})
export class About{
  name: string = "Big Black Cock";

  @Output()
  private cryEvent = new EventEmitter();

  public giveFather():void{
    this.cryEvent.emit(this.name);
  }
}
