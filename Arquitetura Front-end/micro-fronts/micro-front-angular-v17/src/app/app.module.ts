import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Teste17Component } from './components/teste-17/teste-17.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    Teste17Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Teste17Component]
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(Teste17Component, { injector });
    customElements.define('ng-teste-17', el);
  }

  ngDoBootstrap() {}

}
