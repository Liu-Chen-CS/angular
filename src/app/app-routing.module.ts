import {RouterModule, Routes} from "@angular/router";
import {MyHome} from "./home/myHome.component";
import {About} from "./about/about.component";
import {Contact} from "./contact/contact.component";
import {NgModule} from "@angular/core";
import {NotFound} from "./notFound/notFound.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full',
  },
  {
    path: "a",
    redirectTo: "home",
    pathMatch: 'full',
  },
  {
    path: "home",
    component: MyHome,
  },
  {
    path: "about",
    component: About,
  },
  {
    path: "contact/:id",
    component: Contact,
  },
  {
    path: "**",
    component: NotFound,
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule{

}
