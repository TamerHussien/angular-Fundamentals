import "./rxjs-extensions";
import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { EventsAppComponent} from "./events.app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { TOASTR_TOKEN, Toastr, CollapsibleComponent, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from "./common/index";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { EventsListComponent, EventsThumbnailComponent ,EventService, EventDetailsComponent, CreateEventComponent
, EventResolver, EventListResolver, CreateSessionComponent, SessionListComponent, DurationPipe, UpvoteComponent, VoterService, LocationValidator} from './events/index'
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
declare let toastr: Toastr;
declare let jQuery: Object;


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService, 
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery},
        EventResolver,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventListResolver, 
        AuthService,
        VoterService
    ],
 })

export class AppModule {}

function checkDirtyState(component: CreateEventComponent){

    if (component.isDirty){
     return   window.confirm('Are you sure');
    }
return true;
}