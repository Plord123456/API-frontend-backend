
import * as ProfileActions from "./profile.action";
import {createReducer, on} from "@ngrx/store";
import {ProfileState} from "./profile.state";

const initialState :ProfileState = {
  profiles: [],
  isLoading: false,
  error: ''
}

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getAllProfiles, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  }),
  on(ProfileActions.getAllProfilesSuccess, (state, {profiles}) => {
    return {
      ...state,
      profiles: profiles,
      isLoading: false,
    }
  }),

  on(ProfileActions.getAllProfilesFailed, (state, error) => {
    return {
      ...state,
      isLoading: false,
      error: error.error
    }
  })
)

export const UpdateProfile = createReducer(
  initialState,
  on(ProfileActions.UpdateProfile, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  }),
  on(ProfileActions.UpdateProfileSuccess, (state, {profile}) => {
    return {
      ...state,
      profile: profile,
      isLoading: false,
    }
  }),
  on(ProfileActions.UpdateProfileFailed, (state, error) => {
    return {
      ...state,
      isLoading: false,
      error: error.error
    }
  }
)
)
  export const DeleteProfile = createReducer(
  initialState,
  on(ProfileActions.DeleteProfile, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  }),
  )
