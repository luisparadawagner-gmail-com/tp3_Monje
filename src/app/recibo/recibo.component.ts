import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recibo } from './../clases/Recibo';
import  {  FormControl,  FormGroup, FormBuilder,Validators, FormArray  } from '@angular/forms';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() var1: string;

  @Output() apodo = new EventEmitter<string>();
  


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

  nroRecibo = new FormControl();

  serializedDate = new FormControl((new Date()).toISOString());
  get empleados(){
      return this.reciboForm.get('empleados') as FormArray;
  }

  agregarEmpleado(){
      this.empleados.push(this.fb.control(''));
  }
  ngOnInit() {
  }

  ponerApodo(nroRecibo: FormControl) {
    debugger;
    if (this.nroRecibo.value === 1) {
      this.apodo.emit('primer recibo');
    } else {
      this.apodo.emit('no es el primer recibo');
    }
  }


  sumbit() {
    debugger;
    this.reciboForm.value;
    
    this.reciboForm.setValue({
			nroRecibo: 1,
			concepto: {
        detalle: 'luz',
        subTotal: 1000,
      },
      efectivo: true,
      fechaPago:new FormControl(new Date()),
			empleados: [ '' ]
    });
    
    this.reciboForm.patchValue({ total: 1000 });
}




}
