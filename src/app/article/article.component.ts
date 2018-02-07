import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core/src/metadata/directives';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
article: Article;
// votes : number;
// title : string;
// link : string;
  constructor() {
    this.article = new Article("Angular 2",'http://angular.io',10);
   }
   voteUp():boolean{
     this.article.voteUp();
     return false;
   }
   voteDown():boolean{
     this.article.voteDown();
     return false;
   }
  ngOnInit() {
  }

}
