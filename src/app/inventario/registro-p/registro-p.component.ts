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

  constructor(private service:ServiceService, private router:Router) { }
    
    

  ngOnInit(): void {
    
  }


  crear(){
    
    
      this.service.createProducto(this.producto)
      .subscribe(data=>{
        alert("Se registró con éxito");
        window.location.reload();
      
      })
    }
  



}
