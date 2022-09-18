import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CalendarOptions, defineFullCalendarElement, FullCalendarElement } from '@fullcalendar/web-component';
// import * as interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DeviceDetectorService } from "ngx-device-detector";
import { fromEvent, Observable, Subscription } from "rxjs";
// import { ListEventView } from '../../interface/ListEventView/ListEventView';

import { EVENTS } from "../../mock/events";


defineFullCalendarElement();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
// @ts-ignore
export class CalendarComponent implements OnInit {
  // @ts-ignore
  @ViewChild('calendar') calendarRef: ElementRef<FullCalendarElement> | undefined;

  isMobile: boolean = false;
  eventDisplay?: string;
  // view: ListEventView = 'month';

  resizeObservable$: Observable<Event> | undefined
  resizeSubscription$: Subscription | undefined

  constructor(private deviceService: DeviceDetectorService) {
    this.detectDevice();
  }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.detectDevice();
      console.log('event: ', evt)
    })
  }

  detectDevice (): void {
    this.isMobile = this.deviceService.isMobile();
    this.eventDisplay = this.isMobile ? 'list-item' : 'block';

    console.log("IS_MOBILE", this.isMobile);
    console.log("EVENT_DISPLAY", this.eventDisplay);
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // @ts-ignore
    plugins: [dayGridPlugin],
    initialEvents: EVENTS,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    eventDisplay: this.eventDisplay,
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false
    },
    // eventClick: function(info) {
    //   info.jsEvent.preventDefault(); // don't let the browser navigate
    //   console.log("EVENT_CLICK!");
    // },
    navLinks: true,
    navLinkDayClick: (date, jsEvent) => {
      // jsEvent.preventDefault();
      console.log("DATE", date);
    }
  };

}
