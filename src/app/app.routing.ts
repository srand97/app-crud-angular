import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

///importamos los componentes
import { ViewComponent } from './container/default/view.component';
import { exit } from './container/exits/exit';

const routes: Routes = [
{ path: '', 
  children : [
    {path : '', redirectTo : 'entries', pathMatch : 'full'},
    {path : 'entries', component : ViewComponent},
    { path: 'exits', component: exit }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
