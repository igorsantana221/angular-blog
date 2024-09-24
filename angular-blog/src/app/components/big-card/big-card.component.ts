import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = "Marvel Studio anuncia mais novo movie para o cinema no brasil."

    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
