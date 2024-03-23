import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  listaLivros: [];

  formulario: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private livroService: LivroService) { }

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      campoBusca: ['']
    })
  }

  buscarLivros(){
    this.livroService.buscarLivros(this.formulario['campoBusca'])
      .subscribe((res) => console.log(res));
      
  }

}



