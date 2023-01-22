import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
