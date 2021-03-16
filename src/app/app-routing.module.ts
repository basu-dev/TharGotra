import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListGotrasComponent } from "./components/list-gotras/list-gotras.component";
import { ListTharsComponent } from "./components/list-thars/list-thars.component";

const routes=[
    {path:"",component:ListGotrasComponent},
    {path:"detail/:id",component:ListTharsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }