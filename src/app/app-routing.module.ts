import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemolandingComponent } from './demolanding/demolanding.component';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: DemolandingComponent },
  { path: 'group', component: GroupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
