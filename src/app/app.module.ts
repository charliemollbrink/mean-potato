import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PotatoComponent } from './potato/potato.component';

const appRoutes: Routes = [
  {
    path: 'potato',
    component: PotatoComponent,
    data: { title: 'Potato!!1' }
  },
  { path: '',
    redirectTo: '/potato',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PotatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
