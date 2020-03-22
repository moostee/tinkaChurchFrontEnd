import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AudioSermonsComponent } from './audio-sermons/audio-sermons.component';


@NgModule({
  declarations: [MessagesComponent, AudioSermonsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MessagesRoutingModule
  ],
  exports: [AudioSermonsComponent]
})
export class MessagesModule { }
