import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BootCompsComponent } from './boot-comps/boot-comps.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
