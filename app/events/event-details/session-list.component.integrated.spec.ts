import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
import { ISessions } from "../shared/index";
import { By } from '@angular/platform-browser'

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
     component: SessionListComponent,
     element: HTMLElement,
     debugEl: DebugElement
    beforeEach(async() => {
        let mockAuth = {};
        let mockVoterService = {};

        TestBed.configureTestingModule({
            imports: [],
            declarations: [SessionListComponent],
            providers: [
                {provide: AuthService, useValue: mockAuth},
                {provide: VoterService, useValue: mockVoterService}
            ],
            schemas: []
        }).compileComponents();
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })
})