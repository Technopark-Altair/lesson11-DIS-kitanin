import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/models/Article.model';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() articleInput: Article;

  article: Article;
  isRight: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => {
        let id: number = +data.id;
        this.article = this.articleService.getArticle(id);
      }
    );
  }

}
