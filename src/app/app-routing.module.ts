import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { PageNotFoundCommponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
    { path: '', redirectTo:'login', pathMatch:'full'},
    { path: 'login', component: AuthComponent },
    //   { path: 'admin' },
    { path: '**', component: PageNotFoundCommponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}