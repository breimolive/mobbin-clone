import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

interface UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface buttonData {
  id: string;
  title: string;
  amount: string;
  category: Category;
}

export interface Category {
  primaryPhoto: string;
  primaryPhotoAlt: string;
  secondaryPhoto: string;
  secondaryPhotoAlt: string;
  primarySubPhoto: string;
  PrimarySubPhotoAlt: string;
  secondarySubPhoto: string;
  secondarySubPhotoAlt: string;
  description: string;
}

interface CreateUserDto {
  gmail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  me(): Observable<UserDto> {
    return this.http.get<UserDto>('/api/v1/user/me');
  }

  login(email: string, password: string): Observable<UserDto> {
    return this.http.post<UserDto>('/api/v1/user/login', {
      email,
      password
    });
  }

  register(gmail: string, password: string): Observable<CreateUserDto> {
    return this.http.post<CreateUserDto>('/api/v1/user/register', {
      Email: gmail,
      Password: password,
    });
  }
}
