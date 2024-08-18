import {Injectable} from "@angular/core";
import {createEffect, ofType} from "@ngrx/effects";
import * as ProfileActions from "./profile.action";
import {catchError, map, mergeMap, of, switchMap} from "rxjs";
import {ProfileService} from "../../service/profile.service";
import {Actions} from "@ngrx/effects";

@Injectable()
export class ProfileEffect {
  constructor(private actions$: Actions, private profileService: ProfileService) {}

  getAllProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.getAllProfiles),
      switchMap(() => {
       return this.profileService.getAllProfiles()
      }),
      map(profiles => ProfileActions.getAllProfilesSuccess({profiles: profiles})),
      catchError(error => of(ProfileActions.getAllProfilesFailed({error: error}))
    ));
  })
//
//   UpdateProfile$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(ProfileActions.UpdateProfile),
//       mergeMap((action) => {
//         return this.profileService.updateProfile(action.profile).pipe(
//           map(profile => ProfileActions.UpdateProfileSuccess({profile: profile})),
//           catchError(error => of(ProfileActions.UpdateProfileFailed({error: error})))
//         )
//       })
//     )
//   })
//   DeleteProfile$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(ProfileActions.DeleteProfile),
//       mergeMap((action) => {
//         return this.profileService.deleteProfile(action.id).pipe(
//           map(() => ProfileActions.DeleteProfileSuccess({id: action.id})),
//           catchError(error => of(ProfileActions.DeleteProfileFailed({error: error})))
//         )
//       })
//     )
//   })
//
}


