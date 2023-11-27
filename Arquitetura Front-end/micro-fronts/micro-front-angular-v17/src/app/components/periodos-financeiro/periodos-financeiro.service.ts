import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodosFinanceiroService {

  private http: HttpClient = inject(HttpClient);
  private readonly URL = 'http://localhost:10007/contabilidade/api/contabil/periodos-financeiros'
  private readonly AUTHORIZATION = "Bearer fef3e242-0952-4423-bb24-97ef233d28be";


  public getResumosMensais(): Observable<any> {
    return this.http.get(`${this.URL}/resumos-mensais`, {
      headers: {
        "Authorization": this.AUTHORIZATION,
        "App-Context": "eyJleGVyY2ljaW8iOjIwMjJ9",
        "User-Access": "bdrtW_12NSo="
      }
    });
  }

  public getConfiguracaoBloqueio(): Observable<any> {
    return this.http.get(`${this.URL}/configuracoes-bloqueios-cadastros`, {
      headers: {
        "Authorization": this.AUTHORIZATION,
        "App-Context": "eyJleGVyY2ljaW8iOjIwMjJ9",
        "User-Access": "bdrtW_12NSo="
      }
    });
  }

  public getUltimoEncerramento(): Observable<any> {
    return this.http.get(`${this.URL}/ultimo-encerramento`, {
      headers: {
        "Authorization": this.AUTHORIZATION,
        "App-Context": "eyJleGVyY2ljaW8iOjIwMjJ9",
        "User-Access": "bdrtW_12NSo="
      }
    });
  }

  
}
