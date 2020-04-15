import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { AboutComponent } from './Feature/about/about.component';
import { ChurchLeadersComponent } from './Feature/about/church-leaders/church-leaders.component';
import { ContactComponent } from './Feature/contact/contact.component';
import { GetInTouchComponent } from './Feature/contact/get-in-touch/get-in-touch.component';
import { HomeComponent } from './Feature/home/home.component';
import { AdminModule } from './Feature/admin/admin.module';
import { EventsModule } from './Feature/events/events.module';
import { MessagesModule } from './Feature/messages/messages.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ChurchLeadersComponent,
    ContactComponent,
    GetInTouchComponent,
    HomeComponent
  ],
  imports: [
    AdminModule,
    EventsModule,
    MessagesModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
