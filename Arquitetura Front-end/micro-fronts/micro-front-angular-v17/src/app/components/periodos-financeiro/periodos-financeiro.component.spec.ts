import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodosFinanceiroComponent } from './periodos-financeiro.component';

describe('PeriodosFinanceiroComponent', () => {
  let component: PeriodosFinanceiroComponent;
  let fixture: ComponentFixture<PeriodosFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodosFinanceiroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodosFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
