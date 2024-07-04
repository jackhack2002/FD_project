import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetImageComponent } from './get-image/get-image.component';
import { GetStartComponent } from './get-start/get-start.component';
import { ProcessedOutcomeComponent } from './processed-outcome/processed-outcome.component';

@NgModule({
  declarations: [
    AppComponent,
    GetImageComponent,
    GetStartComponent,
    ProcessedOutcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
