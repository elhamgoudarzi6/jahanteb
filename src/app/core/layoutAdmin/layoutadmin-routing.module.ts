import { CatalogComponent } from './catalog/catalog.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ProfileComponent } from './profile/profile.component';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SubscriptionUsersComponent } from './subscription-users/subscription-users.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactFormMessagesComponent } from './contact-form-messages/contact-form-messages.component';
import { UsersComponent } from './users/users.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'reset',
    component: ResetPasswordComponent,
  },
  {
    path: 'panel',
    component: DashboardComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'product',
        component: ProductsComponent,
      },
    ],
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'category',
        component: CategoriesComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'blog',
        component: BlogsComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'discount',
        component: DiscountsComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        component: UsersComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'contact',
        component: ContactFormMessagesComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'order',
        component: OrdersComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'subscription',
        component: SubscriptionUsersComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'comment',
        component: CommentsComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        component: AdministratorsComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'faq',
        component: FaqsComponent,
      },
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'catalog',
        component: CatalogComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutadminRoutingModule {}
