import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id: any
  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit():void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:any ){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title,
    this.photoCover = result.photoCover,
    this.contentDescription = result.description

  }

}
