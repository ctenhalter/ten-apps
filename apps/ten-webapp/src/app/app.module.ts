import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MzdTimelineModule } from 'ngx-mzd-timeline';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MzdTimelineModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
