import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { MonthViewListComponent } from './component/month-view-list/month-view-list.component';
import { DayViewListComponent } from './component/day-view-list/day-view-list.component';
import { EventViewListComponent } from './component/event-view-list/event-view-list.component';
import { EventViewComponent } from './component/event-view/event-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthViewListComponent,
    DayViewListComponent,
    EventViewListComponent,
    EventViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
