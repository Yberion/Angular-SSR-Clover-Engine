import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'appId' }),
    AppRoutingModule,
    RendererModule.forRoot(),
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
