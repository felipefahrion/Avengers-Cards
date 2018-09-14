import { Component } from '@angular/core';
import { AvengersService } from './avengers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Avengers-Cards';

  hero = {
    id:'',
    name:'',
    publisher:'',
    aliases:''
  }

  avengers: any;

  constructor(private service: AvengersService) { 
    this.showAll();
  }

  showAll() {

    this.service.getSuperHeros(70).subscribe(
      res => {
        this.hero.name = res.name;
        this.hero.id = res.id;
        this.hero.publisher = res.biography.publisher;
        this.hero.aliases = res.biography.aliases;
        
      },
      err => console.log(`Something went wrong: ${err}`)
    )
  }


}
