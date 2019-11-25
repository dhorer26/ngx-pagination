import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const appRoutes: Routes = [{
  path: '',
  component: AppComponent,
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
