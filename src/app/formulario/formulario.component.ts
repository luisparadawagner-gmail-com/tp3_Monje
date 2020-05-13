import { Component, OnInit, Input,  } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titulo: String = 'titulo padre' ;

   apodo: string;
 
  constructor() { }

  ngOnInit(): void {
  }

 
  onApodo(apodo) {
    debugger;
		this.apodo = apodo;
	}



}
