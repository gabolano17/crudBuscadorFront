import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'form-user',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private personaService: PersonaService ,private router: Router) { }

  ngOnInit(): void {
  }

  submitear(){
    this.personaService.postData(this.persona).subscribe(data => {
      console.log(data);
      this.router.navigate(['/vista']);
    })
  }

}
