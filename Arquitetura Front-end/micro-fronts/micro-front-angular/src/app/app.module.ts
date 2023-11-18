import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTesteComponent } from './components/ng-teste/ng-teste.component';
import { createCustomElement } from '@angular/elements';
import { NgTeste2Component } from './components/ng-teste-2/ng-teste-2.component';

const components = [
  {
    "seletor": "ng-teste",
    "componente": NgTesteComponent
  },
  {
    "seletor": "ng-teste-2",
    "componente": NgTeste2Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NgTesteComponent,
    NgTeste2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NgTesteComponent, NgTeste2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(private injector: Injector) {
    components.forEach(component => {      
      const el = createCustomElement(component.componente,  { injector });
      customElements.define(component.seletor, el);      
    });
  }

  ngDoBootstrap() {}

}
