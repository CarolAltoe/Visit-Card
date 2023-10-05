import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'email', component: SendEmailComponent},
  { path: '', component: HomeComponent  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
