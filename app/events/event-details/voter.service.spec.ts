import { VoterService } from "./voter.service";
import { Observable } from "rxjs/Rx";
import { ISessions } from '../shared/event.model';

describe('VoterService', () => {

    let voterService: VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);

        voterService = new VoterService(mockHttp);
    })
    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            var session = { id: 6, voters: ['joe', 'john']};
            mockHttp.delete.and.returnValue(Observable.of(false));
            voterService.deleteVoter(3, <ISessions>session, 'joe');
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });

    })
})