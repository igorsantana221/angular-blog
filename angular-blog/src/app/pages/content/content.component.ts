import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = "https://turnmundonerd.com.br/wp-content/uploads/2020/11/tony-stark-182303-1280x0-1-850x560.jpg"
  contentTitle:string = "MINHA NOTICIAS"
  contentDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore dicta velit dolor aspernatur, illo eveniet illum quasi! Vero, provident quis distinctio enim exercitationem dolores laudantium quae veritatis corporis. Cum."
  
}
