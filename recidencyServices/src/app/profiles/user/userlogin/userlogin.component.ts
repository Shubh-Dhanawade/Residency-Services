import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserregisterComponent } from '../userregister/userregister.component';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [RouterLink, UserregisterComponent , UserloginComponent , RouterOutlet],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {

}
