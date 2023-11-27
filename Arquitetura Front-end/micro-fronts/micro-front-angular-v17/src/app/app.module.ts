import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Teste17Component } from './components/teste-17/teste-17.component';
import { createCustomElement } from '@angular/elements';
import { PeriodosFinanceiroComponent } from './components/periodos-financeiro/periodos-financeiro.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Teste17Component,
    PeriodosFinanceiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    let el = createCustomElement(Teste17Component, { injector });
    customElements.define('ng-teste-17', el);

    el = createCustomElement(PeriodosFinanceiroComponent, { injector });
    customElements.define('ngx-periodos-financeiro', el);
  }

  ngDoBootstrap() {}

}
