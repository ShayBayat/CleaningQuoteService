// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ // Set up the routing
      { path: '', redirectTo: 'quote', pathMatch: 'full' }, // Redirect to Quote component 
      { path: 'quote', component: QuoteComponent } // route for the Quote component
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
