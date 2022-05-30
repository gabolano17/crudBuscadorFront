import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'editar-user',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private personaService: PersonaService ,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.personaService.getDataId(id).subscribe(p => this.persona = p);
      }
    })
  }

  editPersona(){
    this.personaService.putData(this.persona).subscribe(data => {
      console.log(data);
      this.router.navigate(['/vista']);
    })
  }

}
