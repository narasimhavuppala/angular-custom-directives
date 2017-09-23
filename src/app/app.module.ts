import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { childComponent } from './childComponent';
import { UpperDirective } from './upper';
import { VisibilityDirective } from './myvisibility';
import { MycolorDirective } from './mycolor';


@NgModule({
  declarations: [
    AppComponent,
    childComponent,
    UpperDirective,
    VisibilityDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
