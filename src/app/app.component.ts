import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ProfileService} from "./service/profile.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-effect';

  constructor(public profileService: ProfileService) {
  }
}

