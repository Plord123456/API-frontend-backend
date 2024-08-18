import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../model/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url='http://localhost:3848/profile';
  constructor(private http:HttpClient) { }

  getAllProfiles() {
    return this.http.get<Profile[]>(`${this.url}/all`);
  }

  updateProfile(profile: Profile) {
    return this.http.put<Profile>(`${this.url}/${profile.id}`, profile);

  }

  deleteProfile(id: number) {
    return this.http.delete<Profile>(`${this.url}/${id}`);

  }
}
