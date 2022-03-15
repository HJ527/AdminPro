import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit{

  @Input() valorInicial:number=0
  @Input() btnClass:string='btn-primary'
  @Output() valorProgreso:EventEmitter<number>= new EventEmitter()

  porcentaje:FormControl=new FormControl(0,[Validators.min(0),Validators.max(100)])

  constructor(){
  }
  ngOnInit(): void {
    this.porcentaje.setValue(this.valorInicial)
    this.btnClass=`btn ${this.btnClass} `


    this.porcentaje.valueChanges.subscribe(value=>{
      if (value>=100) {
        return this.valorProgreso.emit(100)
      } else if(value<=0) {
        return this.valorProgreso.emit(0)

      }else{
        return this.valorProgreso.emit(value)
      }
    })
  }

  cambiarValor(valor:number){

    let progreso=this.porcentaje.value+valor;
    
    this.porcentaje.setValue(progreso)  

    if(this.porcentaje.value>=100){
      return this.porcentaje.setValue(100)
    }
    if(this.porcentaje.value<=0){
      return this.porcentaje.setValue(0)  
    }

    this.valorProgreso.emit(progreso)

  }

  onChange(event:any){
    console.log(event);
    
  }

}
