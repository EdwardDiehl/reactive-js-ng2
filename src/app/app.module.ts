import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SequenceComponent } from './sequence/sequence.component';
import { SequenceService } from "./shared/sequence.service";

@NgModule({
  declarations: [
    AppComponent,
    SequenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SequenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
