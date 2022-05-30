import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { FormComponent } from './components/form/form.component';
import { VistaComponent } from './components/vista/vista.component';

const routes: Routes = [
  {path: '', redirectTo: '/vista', pathMatch:'full'},
  {path: 'vista', component: VistaComponent},
  {path: 'form-user', component:FormComponent},
  {path: 'editar-user/:id', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
