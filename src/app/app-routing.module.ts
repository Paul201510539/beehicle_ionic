import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'addvehicle',
    loadChildren: () => import('./pages/addvehicle/addvehicle.module').then( m => m.AddvehiclePageModule)
  },
  {
    path: 'addservices',
    loadChildren: () => import('./pages/addservices/addservices.module').then( m => m.AddservicesPageModule)
  },
  {
    path: 'addchecklist',
    loadChildren: () => import('./pages/addchecklist/addchecklist.module').then( m => m.AddchecklistPageModule)
  },
  {
    path: 'vehicleinfo',
    loadChildren: () => import('./pages/vehicleinfo/vehicleinfo.module').then( m => m.VehicleinfoPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
