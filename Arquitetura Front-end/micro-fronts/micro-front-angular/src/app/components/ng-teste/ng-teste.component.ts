import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-teste',
  templateUrl: './ng-teste.component.html',
  styleUrls: ['./ng-teste.component.css']
})
export class NgTesteComponent {

  @Input('nome') nome: String = '';

}
