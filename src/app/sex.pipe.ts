import {Pipe} from "@angular/core";

@Pipe({
  name: "sexPipe",
  standalone: true
})
export class SexPipe{
  transform(val:number, lang:string = "en"):string{
    if(lang == "en"){
      if(val == 1){
        return "Male";
      }
      else if(val == 0){
        return "Female";
      }
      else{
        return "unknown";
      }
    }
    else{
      if(val == 1){
        return "男";
      }
      else if(val == 0){
        return "女";
      }
      else{
        return "未知";
      }
    }
  }
}
