import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelicStatusComponent } from './selic-status/selic-status.component';
import { CicloVidaComponent } from './selic-status/componentes/ciclo-vida/ciclo-vida.component';

@NgModule({
  declarations: [AppComponent, SelicStatusComponent, CicloVidaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
