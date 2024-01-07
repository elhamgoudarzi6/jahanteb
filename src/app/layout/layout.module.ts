import { LayoutComponent } from './layout.component';
import { TeamComponent } from './about/team/team.component';
import { DepartmentComponent } from './about/department/department.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import { PrimengListModule } from './../primeng-list.module';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {RatingModule} from 'primeng/rating';
import { AngularMaterialListModule } from './../angular-material-list.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatStepperModule} from '@angular/material/stepper';
import {TimelineModule} from 'primeng/timeline';
import {LoginRegisterComponent} from './login-register/login-register.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './home/services/services.component';
import { SliderComponent } from './home/slider/slider.component';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';
import { NewestProductsComponent } from './home/newest-products/newest-products.component';
import { SubscriptionComponent } from './home/subscription/subscription.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    TeamComponent,
    DepartmentComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    ContactComponent,
    AboutComponent,
    LoginRegisterComponent, 
    NewsComponent,
    NewsDetailsComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ServicesComponent,
    SliderComponent,
    LatestNewsComponent,
    NewestProductsComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    PrimengListModule,
    CarouselModule,
    AngularMaterialListModule,
    BreadcrumbModule,
    RatingModule,
    MatStepperModule,
    TimelineModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule { }
