import { Component, OnInit, inject } from '@angular/core';
import { PeriodosFinanceiroService } from './periodos-financeiro.service';

@Component({
  selector: 'app-periodos-financeiro',
  templateUrl: './periodos-financeiro.component.html',
  styleUrl: './periodos-financeiro.component.scss'
})
export class PeriodosFinanceiroComponent implements OnInit {

  public resumosMensais: any[] = [];
  public ultimoEncerramento: any = {};
  public periodoMovimentacaoFinanceira: any = {};
  public configuracaoBloqueio: any = {};

  private service: PeriodosFinanceiroService = inject(PeriodosFinanceiroService);

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.getResumosMensais();
    this.getConfiguracaoBloqueio();
    this.getUltimoEncerramento();
  }

  hasPeriodoMovimentacao() {
    return Boolean(this.periodoMovimentacaoFinanceira && this.periodoMovimentacaoFinanceira.dataInicio && this.periodoMovimentacaoFinanceira.dataFim)
  }

  getClassMes(mes: any): string {
    var status = mes.status;

    if (this.isStatusNaoAberto(status) || this.isStatusNaoEncerrado(status)) {
      return '';
    } else if (this.isStatusAberto(status) || this.isStatusParcialmenteAberto(status)) {
      return 'fa-unlock';
    } else if (this.isStatuParcialmentesEncerrado(status)) {
      return 'fa-lock text-warning';
    }

    return 'fa-lock text-success';
  }


  isStatusNaoAberto(mes: any): boolean {
    var status = mes.status;
    return status && status.key === 'NAO_ABERTO';
  }

  isStatusAberto(status: any): boolean {
    return status && status.key === 'ABERTO';
  }

  isStatusParcialmenteAberto(status: any): boolean {
    return status && status.key === 'PARCIALMENTE_ABERTO';
  }

  isStatusEncerrado(status: any): boolean {
    return status && status.key === 'ENCERRADO';
  }

  isStatusNaoEncerrado(status: any): boolean {
    return status && status.key === 'NAO_ENCERRADO';
  }

  isStatuParcialmentesEncerrado(status: any): boolean {
    return status && status.key === 'PARCIALMENTE_ENCERRADO';
  }

  getResumosMensais() {
    this.service.getResumosMensais().subscribe(data => {
      this.resumosMensais = data;
    });
  }

  getConfiguracaoBloqueio() {
    this.service.getConfiguracaoBloqueio().subscribe(data => {
      this.configuracaoBloqueio = data;
    });
  }

  getUltimoEncerramento() {
    this.service.getUltimoEncerramento().subscribe(data => {
      this.ultimoEncerramento = data;
    });
  }

}
