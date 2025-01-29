import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelicStatusComponent } from './selic-status/selic-status.component';

const routes: Routes = [
  {
    path: '',
    component: SelicStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
