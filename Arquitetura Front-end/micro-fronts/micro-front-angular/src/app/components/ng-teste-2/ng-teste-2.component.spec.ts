import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTeste2Component } from './ng-teste-2.component';

describe('NgTeste2Component', () => {
  let component: NgTeste2Component;
  let fixture: ComponentFixture<NgTeste2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTeste2Component]
    });
    fixture = TestBed.createComponent(NgTeste2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
