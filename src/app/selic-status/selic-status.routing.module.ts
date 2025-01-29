import { Routes, RouterModule } from '@angular/router';
import { SelicStatusComponent } from './selic-status.component';

const routes: Routes = [{ path: '', component: SelicStatusComponent }];

export const SelicStatusRoutes = RouterModule.forChild(routes);
