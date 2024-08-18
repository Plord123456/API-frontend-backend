import {Profile} from "../../model/profile.model";

export interface ProfileState {
  profiles: Profile[];
  isLoading: boolean;
  error: any;

}
