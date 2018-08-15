import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { EventsAppComponent} from "./events.app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { TOASTR_TOKEN, Toastr, CollapsibleComponent, JQ_TOKEN, SimpleModalComponent, ModalTriggerDirective } from "./common/index";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { EventsListComponent, EventsThumbnailComponent ,EventService, EventDetailsComponent, CreateEventComponent
, EventRouterActivator, EventListResolver, CreateSessionComponent, SessionListComponent, DurationPipe} from './events/index'
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
declare let toastr: Toastr;
declare let jQuery: Object;


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
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
        ModalTriggerDirective
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService, 
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery},
        EventRouterActivator,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventListResolver, 
        AuthService,
    ],
 })

export class AppModule {}

function checkDirtyState(component: CreateEventComponent){

    if (component.isDirty){
     return   window.confirm('Are you sure');
    }
return true;
}