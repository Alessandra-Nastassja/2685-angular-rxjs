import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent {

  @Input() livro: Object;
  modalAberto: boolean;

  onModelChange(evento: boolean) {
    this.modalAberto = evento;
  }
}
