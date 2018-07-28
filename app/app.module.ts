import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { EventsAppComponent} from "./events.app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventsThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./assets/routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouterActivator } from "./events/event-details/event-router-activator";

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, EventsListComponent,
        EventsThumbnailComponent, NavBarComponent, EventDetailsComponent, CreateEventComponent, Error404Component],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService, 
        EventRouterActivator,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent){

    if (component.isDirty){
     return   window.confirm('Are you sure');
    }
return true;
}