import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { Http,Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class AuthService {
    constructor(private http:Http){}

    currentUser: IUser;

    loginUser(userName: string, password: string){

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers})
        let loginInfo = {username: userName, password: password}
        return this.http.post('/api/login', JSON.stringify(loginInfo), options).do(res => {
            if (res) {
                this.currentUser = res.json().user;
            }
        }).catch(error => {
            return Observable.of(false)
        })
    }
updateCurrentUser(firstName: string, lastName: string){
this.currentUser.firstName = firstName;
this.currentUser.lastName = lastName;
let headers = new Headers({'Content-Type': 'application/json'});
let options = new RequestOptions({headers: headers})

return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
}
    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuth(){
        return this.http.get('/api/currentIdentity').map((res: any) => {
            if (res._body){
                return res.json()
            } else {
                return {}
            }
        }).do(currentUser => {
            if(!!currentUser.userName){
                this.currentUser = currentUser;
            }
        }).subscribe();
    }

    logOut(){
        this.currentUser= undefined;

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(`/api/logout`, JSON.stringify({}), options);

    }
}