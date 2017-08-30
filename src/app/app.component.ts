import { Component } from '@angular/core';

import { Article } from './article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  articles: Article[];

  constructor()
  {
    this.articles = 
    [ 
      new Article('The Angular Guru', 
      'The best way to master Angular'),
      
      new Article('The Angular Boss is Me',
        'I\'ll be the best by God\'s grace'),
      new Article('The Vue framework is new.',
        'Yeah it is, but the syntax is cool.')
    ]
  }
}
