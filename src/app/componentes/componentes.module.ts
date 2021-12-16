import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { UnirSalaComponent } from './unir-sala/unir-sala.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearSalaComponent,
    UnirSalaComponent,
    FormUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CrearSalaComponent,
    UnirSalaComponent,
    FormUsuarioComponent
  ]
})
export class ComponentesModule { }
