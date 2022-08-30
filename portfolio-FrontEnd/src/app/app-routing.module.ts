import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularyPageComponent } from './components/formulary-page/formulary-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MypeoplesPageComponent } from './components/mypeoples-page/mypeoples-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'nueva', component:FormularyPageComponent},
  {path:'editar', component:FormularyPageComponent},
  {path:'lista', component:ListPageComponent},
  {path:'miLista', component:MypeoplesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
