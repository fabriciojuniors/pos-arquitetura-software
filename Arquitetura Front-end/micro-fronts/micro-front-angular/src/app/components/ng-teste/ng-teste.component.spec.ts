import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTesteComponent } from './ng-teste.component';

describe('NgTesteComponent', () => {
  let component: NgTesteComponent;
  let fixture: ComponentFixture<NgTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTesteComponent]
    });
    fixture = TestBed.createComponent(NgTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
