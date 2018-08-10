import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ISessions } from "../shared/index";


@Component({
    selector: 'session-list',
    templateUrl: './app/events/event-details/session-list.component.html'
})


export class SessionListComponent implements OnInit, OnChanges {

    @Input() sessions: ISessions[];
    @Input() filterBy: string;
    visibleSessions: ISessions[] = [];

    ngOnInit() {

    }

    ngOnChanges() {
        if (this.sessions){
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions= this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;})
        }

    }

}