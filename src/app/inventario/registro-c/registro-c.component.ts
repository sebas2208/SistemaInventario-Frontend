import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-registro-c',
  templateUrl: './registro-c.component.html',
  styleUrls: ['./registro-c.component.css']
})
export class RegistroCComponent implements OnInit {

 
  productos:Producto[] = [];
  producto:Producto = new Producto();
  elegido: string  = '0';
  numero:number = 0;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }



editar(){
  this.numero=Number(this.elegido);


  if(this.numero==0 || this.producto.precioCompra==null || this.producto.stock==null || this.producto.precioVenta==null ){
    alert("Ingrese todos los datos")
    
  }else if(this.producto.precioCompra < 0 || this.producto.precioVenta < 0 || this.producto.stock < 0){
    
  alert("Ingrese datos númericos validos")

  }else{
  this.service.updateProducto( this.producto,this.numero)
      .subscribe(data=>{
        alert("Se Actualizo con éxito");
        window.location.reload();
      
      })
    }

}

}
