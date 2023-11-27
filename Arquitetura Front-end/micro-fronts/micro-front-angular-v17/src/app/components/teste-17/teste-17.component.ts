import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teste-17',
  templateUrl: './teste-17.component.html',
  styleUrl: './teste-17.component.scss'
})
export class Teste17Component {

  @Input("nome") nome!: string;

}
