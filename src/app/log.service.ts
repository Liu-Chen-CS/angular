import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LogService {

  doAction(action:string){
    const userName: string = "Liu Chen";
    const time: Date = new Date();
    console.log(`***** user: ${userName}, time: ${time}, action: ${action} one item`);
  }
}
