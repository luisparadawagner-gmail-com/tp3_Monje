import { Component, OnInit } from '@angular/core';
import { Recibo } from './../clases/Recibo';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

 
  reciboForm = this.fb.group({
    nroRecibo:['',Validators.required],
    concepto: this.fb.group({
			detalle: [''],
			subTotal: ['']
        }),
    efectivo: [false],
    fechaPago:new FormControl(new Date()),
    empleados: this.fb.array([this.fb.control('')])
  });

  serializedDate = new FormControl((new Date()).toISOString());
  get empleados(){
      return this.reciboForm.get('empleados') as FormArray;
  }

  agregarEmpleado(){
      this.empleados.push(this.fb.control(''));
  }
  ngOnInit() {
  }

  sumbit() {
    debugger;
    this.reciboForm.value;
    console.warn(this.reciboForm.value)
}


}
