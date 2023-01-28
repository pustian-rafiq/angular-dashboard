import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '@core';
import { TokenService } from '@core/authentication';
import { map } from 'rxjs/operators';
import { Token, User } from './interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient, private tokenService: TokenService) {}

  login(username: string, password: string, rememberMe = false) {
    return this.http.post<Token>('http://localhost:8800/api/auth/login', {
      username,
      password,
      rememberMe,
    });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  //me query te direct header pass kore dce and ok
  me() {
    // console.log('object', this.tokenService.getBearerToken());
    return this.http.get<User>('http://localhost:8800/api/users/me', {
      headers: {
        'Authorization': this.tokenService.getBearerToken(),
        'content-type': 'Application/json',
      },
    });
    // return this.http.get<User>('/me');
  }

  menu() {
    // ekhn ei
    return this.http.get<{ menu: Menu[] }>('http://localhost:3000/menu').pipe(
      map(res => {
        console.log('res menu', res.menu);
        return res.menu;
      })
    );
  }
}
