import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { EventsAppComponent} from "./events.app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { EventsListComponent, EventsThumbnailComponent ,EventService, EventDetailsComponent, CreateEventComponent
, EventRouterActivator, EventListResolver} from './events/index'
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
    declarations: [EventsAppComponent, EventsListComponent,
        EventsThumbnailComponent, NavBarComponent, EventDetailsComponent, CreateEventComponent, Error404Component],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService, 
        EventRouterActivator,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventListResolver,
        AuthService,
    ]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent){

    if (component.isDirty){
     return   window.confirm('Are you sure');
    }
return true;
}