import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'weathers', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'weathers',
    loadChildren: () => import('./weathers/weathers.module').then( m => m.WeathersPageModule)
  },
  {
    path: 'weather/:dt',
    loadChildren: () => import('./weather-details/weather-details.module').then( m => m.WeatherDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
