import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddNumbersComponent } from './add-numbers/add-numbers.component';
import { SolutionTimeComponent } from './solution-time/solution-time.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNumbersComponent,
    SolutionTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
