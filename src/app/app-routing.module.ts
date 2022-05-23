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
  {
    path: 'odometer',
    loadChildren: () => import('./pages/odometer/odometer.module').then( m => m.OdometerPageModule)
  },
  {
    path: 'vinfo/:id',
    loadChildren: () => import('./vinfo/vinfo.module').then( m => m.VinfoPageModule)
  },
  {
    path: 'vinfo',
    loadChildren: () => import('./vinfo/vinfo.module').then( m => m.VinfoPageModule)
  },
  {
    path: 'vimages',
    loadChildren: () => import('./vimages/vimages.module').then( m => m.VimagesPageModule)
  },
  {
    path: 'trans/:id',
    loadChildren: () => import('./trans/trans.module').then( m => m.TransPageModule)
  },

  {
    path: 'userupdate',
    loadChildren: () => import('./userupdate/userupdate.module').then( m => m.UserupdatePageModule)
  },
  
  {
    path: 'slist/:id',
    loadChildren: () => import('./slist/slist.module').then( m => m.SlistPageModule)
  },
  {
    path: 'slist',
    loadChildren: () => import('./slist/slist.module').then( m => m.SlistPageModule)
  },
  {
    path: 'addservicelist/:vehicle_id',
    loadChildren: () => import('./addservicelist/addservicelist.module').then( m => m.AddservicelistPageModule)
  },
  {
    path: 'viewservice/:vehicle_id/:service_id',
    loadChildren: () => import('./addservicelist/addservicelist.module').then( m => m.AddservicelistPageModule)
  },
  {
    path: 'translist/:vehicle_id',
    loadChildren: () => import('./translist/translist.module').then( m => m.TranslistPageModule)
  },
  {
    path: 'transinfo/:vehicle_id/:transaction_id',
    loadChildren: () => import('./transinfo/transinfo.module').then( m => m.TransinfoPageModule)
  },
  {
    path: 'transinfo',
    loadChildren: () => import('./transinfo/transinfo.module').then( m => m.TransinfoPageModule)
  }
 




];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
