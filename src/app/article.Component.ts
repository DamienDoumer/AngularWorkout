import { Component, Input } from '@angular/core';

@Component({
    selector : 'app-article',
    templateUrl : 'article.component.html'
})

export class ArticleComponent
{
    @Input() article: Article[];
}

export class Article
{
    constructor( public title: string, public description: string)
    {

    }
}