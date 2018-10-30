import { Component, OnInit } from '@angular/core';


interface Tarefa {
  titulo: string;
  feito: boolean;
}


@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css']
})
export class MeuPrimeiroComponenteComponent implements OnInit {
  tarefas: Tarefa[] = [
    { titulo: 'Tarefa TESTE', feito: false },
    { titulo: 'Tarefa TESTE 2', feito: false }

  ];
  tarefa: Tarefa = {titulo: '', feito: false };

  constructor() {

  }

  ngOnInit() {
  }

  marcar(tarefa: Tarefa) {
    if (tarefa.feito) {
      tarefa.feito = false;
    } else {
      tarefa.feito = true;
    }

  }


}
