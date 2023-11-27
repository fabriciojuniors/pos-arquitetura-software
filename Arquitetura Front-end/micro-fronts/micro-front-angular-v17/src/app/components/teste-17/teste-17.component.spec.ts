import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste17Component } from './teste-17.component';

describe('Teste17Component', () => {
  let component: Teste17Component;
  let fixture: ComponentFixture<Teste17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teste17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Teste17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
