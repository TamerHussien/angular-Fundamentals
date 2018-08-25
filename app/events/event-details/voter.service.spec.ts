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

        it('should call http.delete with the right URL', () => {
            var session = { id: 6, voters: ['joe', 'john']};
            mockHttp.delete.and.returnValue(Observable.of(false));
            voterService.deleteVoter(3, <ISessions>session, 'joe');
            let url = `/api/events/3/sessions/6/voters/joe`

            expect(mockHttp.delete).toHaveBeenCalledWith(url);
        });

    })

    describe('addVoter', () => {

        it('should call http.delete with the right URL', () => {
        var session = { id: 6, voters: ['john']};
            mockHttp.post.and.returnValue(Observable.of(false));
            voterService.addVoter(3, <ISessions>session, 'joe');
            let url = `/api/events/3/sessions/6/voters/joe`

            expect(mockHttp.post).toHaveBeenCalledWith(url, '{}', jasmine.any(Object));
        });
    })
})