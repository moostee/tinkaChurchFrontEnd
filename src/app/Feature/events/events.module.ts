import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { LatestEventComponent } from './latest-event/latest-event.component';
import { EventsComponent } from './events.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { SharedModule } from 'src/app/Shared/shared.module';
@NgModule({
  declarations: [LatestEventComponent, EventsComponent, UpcomingEventsComponent],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule
  ],
  exports: [LatestEventComponent,UpcomingEventsComponent,EventsComponent]
})
export class EventsModule { }
