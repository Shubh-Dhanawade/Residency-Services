import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { WorkerloginComponent } from '../worker/workerlogin/workerlogin.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgClass , RouterLink , WorkerloginComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

 

    

}
