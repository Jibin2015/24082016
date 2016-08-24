import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing 
  ],
  declarations: [ 
    AppComponent,    
    RegisterComponent 
  ],
  providers: [appRoutingProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }