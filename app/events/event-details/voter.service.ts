import { Injectable } from "@angular/core";
import { ISessions } from "../shared";
import { Http,Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";


@Injectable()

export class VoterService {

    constructor(private http:Http){}
    userHasVoted(session: ISessions, voterName: string){ 
        return session.voters.some(voter => voter === voterName)
    }

    deleteVoter(eventId: number, session: ISessions, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName)

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`

        return this.http.delete(url).catch(this.handleError).subscribe();

    }
    addVoter(eventId: number,session: ISessions, voterName: string) {
        session.voters.push(voterName);
        let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers})
      let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
      return this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
    }

    
    handleError(error: Response) {
        return Observable.throw(error.statusText);
      }
}