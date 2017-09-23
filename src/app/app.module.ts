import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChildComponent } from './childComponent';
import { UpperDirective } from './upper';
import { VisibilityDirective } from './myvisibility';
import { MycolorDirective } from './mycolor';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
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
