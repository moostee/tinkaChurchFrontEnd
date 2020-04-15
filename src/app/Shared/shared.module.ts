import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NotificationComponent } from './notification/notification.component';
import { OneLoveComponent } from './one-love/one-love.component';
import { SliderComponent } from './slider/slider.component';
import { TestimonyComponent } from './testimony/testimony.component';



@NgModule({
  declarations: [LoaderComponent, NotificationComponent, OneLoveComponent, SliderComponent, TestimonyComponent],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent,SliderComponent,NotificationComponent,OneLoveComponent,TestimonyComponent]
})
export class SharedModule { }
