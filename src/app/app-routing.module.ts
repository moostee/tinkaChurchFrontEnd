import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Feature/home/home.component';
import { ContactComponent } from './Feature/contact/contact.component';
import { AboutComponent } from './Feature/about/about.component';


const routes: Routes = [
  {path: '', redirectTo : '/home', pathMatch : 'full' },
  {path: 'home', component : HomeComponent },
  {path: 'contact', component : ContactComponent },
  {path: 'about', component : AboutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
