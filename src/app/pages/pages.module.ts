import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class PagesModule { }
