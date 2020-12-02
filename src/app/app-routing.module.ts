import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ProcComponent } from './proc/proc.component';

const routes: Routes = [
  {path: "articles", component: ArticlesComponent},
  {path: "proc/:id", component: ProcComponent},
  {path: "article/:id", component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
