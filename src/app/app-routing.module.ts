import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./paginas/principal/principal.module').then(m => m.PrincipalModule) },
  { path: 'sala', loadChildren: () => import('./paginas/sala/sala.module').then(m => m.SalaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
