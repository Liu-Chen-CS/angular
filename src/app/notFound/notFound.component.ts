import {Component, EventEmitter, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-not-found",
  standalone: true,
  templateUrl: "./notFound.component.html",
  styleUrl: "./notFound.component.css",
  imports: [
    FormsModule
  ]
})
export class NotFound{

}
