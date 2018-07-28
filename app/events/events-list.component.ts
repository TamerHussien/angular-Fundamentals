import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:'events-list',
    template: `
    <div>
    <h1>Upcoming Angular2 Events </h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events " class="col-md-5">
    <events-thumbnail [event]="event"></events-thumbnail>
    </div>
    </div>
</div>
    `
})

export class EventsListComponent implements OnInit{
events: any;
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute
  ){
  }

  ngOnInit(){
this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }

}