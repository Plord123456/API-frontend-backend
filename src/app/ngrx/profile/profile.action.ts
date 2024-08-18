import {createAction, props} from "@ngrx/store";
import {Profile} from "../../model/profile.model";


export const getAllProfiles = createAction(
  '[Profile] Get All Profiles');

export const getAllProfilesSuccess = createAction(
  '[Profile] Get All Profiles Success',
  props<{ profiles: Profile[] }>());

export const getAllProfilesFailed = createAction(
  '[Profile] Get All Profiles Failure',
  props<{ error: string }>());
export const GetByProfileId = createAction('[Profile] Get By Profile Id', props<{ id: number }>());
export const GetByProfileIdSuccess = createAction('[Profile] Get By Profile Id Success', props<{ profile: Profile }>());
export const GetByProfileIdFailed = createAction('[Profile] Get By Profile Id Failure', props<{ error: string }>());
export const UpdateProfile = createAction('[Profile] Update Profile', props<{ profile: Profile }>());
export const UpdateProfileSuccess = createAction('[Profile] Update Profile Success', props<{ profile: Profile }>());
export const UpdateProfileFailed = createAction('[Profile] Update Profile Failure', props<{ error: string }>());
export const DeleteProfile = createAction('[Profile] Delete Profile', props<{ id: number }>());
export const DeleteProfileSuccess = createAction('[Profile] Delete Profile Success', props<{ id: number }>());
export const DeleteProfileFailed = createAction('[Profile] Delete Profile Failure', props<{ error: string }>());
