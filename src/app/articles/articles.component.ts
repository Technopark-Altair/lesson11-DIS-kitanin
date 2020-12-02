import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/Article.model';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Array<Article>;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articlesService.getArticles();
  }

  addNewArticle(newArticle: Article){
    this.articlesService.addArticle(newArticle);
  }
}
