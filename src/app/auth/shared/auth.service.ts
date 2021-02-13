import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import * as moment from 'moment'
import { Router } from "@angular/router";


const jwt = new JwtHelperService();

class DecordedToken {
    userid: string = ''
    username: string = ''
    exp: number = 0
}

@Injectable()
export class AuthService {
    private decordedToken
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.decordedToken = JSON.parse(localStorage.getItem('app-meta')) || new DecordedToken()
    }

    getToken() {
        return localStorage.getItem('app-auth')
    }

    IsAuthenticated() {
        // return moment().isBefore(moment.unix(this.decordedToken.exp))
        const test: Boolean = moment().isBefore(moment.unix(this.decordedToken.exp))
        // debugger
        return test
    }

    register(userData: any): Observable<any> {
        // debugger
        return this.http.post('/api/v1/users/register', userData)
    }

    login(userData: any): Observable<any> {
        // debugger
        return this.http.post('/api/v1/users/login', userData).pipe(
            map(
                (token: string) => {
                    this.decordedToken = jwt.decodeToken(token)
                    // debugger                
                    localStorage.setItem('app-auth', token)
                    localStorage.setItem('app-meta', JSON.stringify(this.decordedToken))
                    // debugger;
                    return token;
                }
            )
        )
    }

    logout() {
        localStorage.removeItem('app-auth')
        localStorage.removeItem('app-meta')
        this.decordedToken = new DecordedToken()
        this.router.navigate(['/login'])
    }
}