import { Injectable } from '@angular/core';
import { Article } from 'src/models/Article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Array<Article> = [
    {id: 0, header: 'Супервакцина', description: 'Точно не кликбейт'},
    {id: 1, header: 'Чудовакцина', description: 'Лечит все !'},
  ];
  constructor() {}

  getArticles(){
    return this.articles;
  }

  getArticle(id: number){
    return this.articles.find((el) => el.id === id);
  }

  addArticle(article: Article){
    article.id = this.getArticles().length;
    this.articles.push(article);
    
  }
}
