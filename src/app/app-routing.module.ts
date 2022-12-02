import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { CreateDayoffComponent } from "./worker/create-dayoff/create-dayoff.component";
import { CreateWorkerComponent } from "./rh/components/create-worker/create-worker.component";
import { DayoffListComponent } from "./shared/dayoff-list/dayoff-list.component";
import { PageNotFoundCommponent } from './core/component/page-not-found/page-not-found.component';
import { WorkerListComponent } from "./rh/components/worker-list/worker-list.component";
import { UpdateWorkerComponent } from "./rh/components/update-worker/update-worker.component";


const routes : Routes = [
    { path: '', redirectTo:'login', pathMatch:'full'},
    { path: 'login', component: AuthComponent },
    { path:'worker', component: WorkerListComponent },
    { path:'newworker', component: CreateWorkerComponent },
    { path:'updateworker/:id', component: UpdateWorkerComponent },
    { path:'conges', component: DayoffListComponent },
    { path:'newdayoff', component: CreateDayoffComponent },
  
    //   { path: 'admin' },
    { path: '**', component: PageNotFoundCommponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}