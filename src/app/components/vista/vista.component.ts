import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { CapturaDataService } from 'src/app/services/captura-data.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  personas: Persona[] = [];
  persona: Persona = new Persona();
  nombre: string = "";
  search: boolean = false;

  constructor(private personaService: PersonaService, private router: Router, private capturaData: CapturaDataService) { }

  ngOnInit(): void {
    this.capturaData.valorCompartido.subscribe(x => {
      this.nombre = x;
      if(!this.nombre){
        this.search = false;
        this.getPersonas();
      }else{
        this.search = true;
        this.getPersona(this.nombre);
      }
    });
  }

  getPersonas(){
    this.personaService.getData().subscribe(data => this.personas = data);
  }

  getPersona(nombre: string){
    this.personas.filter(p => p.nombre.includes(nombre)).map(re => this.persona = re);
  }

  editPersona(id: number){
    this.router.navigate(['/editar-user', id]);
  }

  deletePersona(id: number){
    this.personaService.deleteData(id).subscribe(data => this.getPersonas())
  }

}
