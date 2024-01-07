import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },


  {
    path: 'news',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: NewsComponent,
      },
    ],
  },
  {
    path: 'faq',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: FaqComponent,
      },
    ],
  },
  {
    path: 'news-detail/:id',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: NewsDetailsComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ContactComponent,
      },
    ],
  },
  {
    path: 'about',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LoginRegisterComponent,
      },
    ],
  },
  {
    path: 'product-detail/:id',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path: 'products/:cat/:sub',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductsComponent,
      },
    ],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('../core/layoutUser/layoutuser.module').then((m) => m.LayoutuserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../core/layoutAdmin/layoutadmin.module').then((m) => m.LayoutadminModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
