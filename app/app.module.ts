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

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, EventsListComponent, EventsThumbnailComponent, NavBarComponent, EventDetailsComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService]
})

export class AppModule {}