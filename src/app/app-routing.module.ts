import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'amphoe',
    loadChildren: () => import('./amphoe/amphoe.module').then( m => m.AmphoePageModule)
  },
  {
    path: 'fullmap',
    loadChildren: () => import('./fullmap/fullmap.module').then( m => m.FullmapPageModule)
  },
  {
    path: 'report7day',
    loadChildren: () => import('./report7day/report7day.module').then( m => m.Report7dayPageModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing.module').then( m => m.RoutingPageModule)
  },
  {
    path: 'tambon',
    loadChildren: () => import('./tambon/tambon.module').then( m => m.TambonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
