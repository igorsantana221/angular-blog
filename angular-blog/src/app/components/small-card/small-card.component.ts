import { Component, Input, input, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent  {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  Id:string = "0"


}
