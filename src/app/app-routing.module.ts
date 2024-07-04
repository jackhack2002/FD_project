import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetImageComponent } from './get-image/get-image.component';
import { GetStartComponent } from './get-start/get-start.component';
import { ProcessedOutcomeComponent } from './processed-outcome/processed-outcome.component';

const routes: Routes = [
  {path:'',component:GetStartComponent},
  {path:'image-collection',component:GetImageComponent},
  {path:'view-image',component:ProcessedOutcomeComponent},
  {path:'**',component:GetImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
