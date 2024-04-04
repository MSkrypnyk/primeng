import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { KnobModule } from 'primeng/knob';
import { ColorPickerModule } from 'primeng/colorpicker';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    KnobModule,
    ColorPickerModule,
    PaginatorModule,
    ScrollPanelModule,
    TabViewModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

