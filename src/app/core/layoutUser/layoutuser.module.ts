import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengListModule } from 'src/app/primeng-list.module';
import { AngularMaterialListModule } from 'src/app/angular-material-list.module';
import { LayoutuserRoutingModule } from './layoutuser-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OrdersComponent,
    ProfileComponent,
    ContentDashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutuserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengListModule,
    AngularMaterialListModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LayoutuserModule { }
