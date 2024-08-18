import {Component, Input} from '@angular/core';
import {Profile} from "../../model/profile.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
@Input() profile!: Profile;
  profiles: any;

}
