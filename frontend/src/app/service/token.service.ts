import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {Observable, Subject} from "rxjs";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    private logOutEvent = new Subject();

    logOut(): void {
        this.logOutEvent.next('');
        window.sessionStorage.clear();
    }

    saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    saveUser(user: User): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    getUser(): User | null {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }

        return null;
    }

    getRole(): String | null {
        let role = this.getUser()?.role;
        return role ? role : null;
    }

    isLoggedIn(): boolean {
        let user = this.getUser();
        return !!user && !!user?.token
    }

    getLogoutEvent(): Observable<any> {
        return this.logOutEvent.asObservable()
    }
}
