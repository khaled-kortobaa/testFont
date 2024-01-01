/// <reference types="@angular/localize" />

import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(AppRoutingModule),
    provideAnimations()
  ]
});