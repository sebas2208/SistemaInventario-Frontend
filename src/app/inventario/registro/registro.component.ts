import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  personas:Persona[] = [];
  persona:Persona = new Persona();
  constructor(private service:AuthenticationService, private router:Router) { }


  ngOnInit(){
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  NOSE(){
    
  }

}
