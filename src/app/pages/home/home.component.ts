import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
