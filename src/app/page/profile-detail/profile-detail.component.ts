import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {Store} from "@ngrx/store";
import {AsyncPipe, NgForOf} from "@angular/common";
import * as ProfileActions from '../../ngrx/profile/profile.action'
import {ProfileComponent} from "../../compoment/profile/profile.component";
import {Profile} from "../../model/profile.model";
@Component({
  selector: 'app-list-profiles',
  standalone: true,
  imports: [
    AsyncPipe,
    ProfileComponent,
    NgForOf
  ],
  templateUrl:'profile-detail.component.html',
  styleUrl:'profile-detail.component.scss'
})
export class ProfileDetailComponent {
  profile$!:Observable<Profile[]>
  constructor(private store : Store<{profile: ProfileState}>) {
    this.profile$ = this.store.select('profile', 'profiles');
    this.store.dispatch(ProfileActions.getAllProfiles());
  }

}
