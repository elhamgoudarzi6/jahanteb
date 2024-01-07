import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./Core/layoutAdmin/layoutadmin.module').then(m => m.LayoutadminModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
