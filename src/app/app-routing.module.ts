import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component';
import { MovementComponent } from './movement/movement.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'donation', component: DonationComponent},
  {path: 'movement', component: MovementComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
