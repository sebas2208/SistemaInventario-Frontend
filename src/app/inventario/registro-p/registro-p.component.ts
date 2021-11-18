import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {

  producto:Producto = new Producto();
  nombre: string  = '0';

  constructor(private service:ServiceService, private router:Router) { }
    
    

  ngOnInit(): void {
   
  }


  crear(){
    
    
      if(this.producto.nombre==null || this.producto.nombre=="" || this.producto.precioCompra==null || this.producto.stock==null || this.producto.precioVenta==null){
        alert("Ingrese todos los datos")
        
      }else if(this.producto.precioCompra < 0 || this.producto.precioVenta < 0 || this.producto.stock < 0){
        
      alert("Ingrese datos númericos validos")

      }else{
        this.service.createProducto(this.producto)
      .subscribe(data=>{
        alert("Se registró con éxito");
        window.location.reload();
      
      })

      }
      
    }
  



}
