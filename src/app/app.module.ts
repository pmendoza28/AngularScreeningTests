import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestChildComponent } from './test-child/test-child.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularResizeElementModule } from 'angular-resize-element';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularResizeElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
