import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { ComparasionComponent } from './comparasion/comparasion.component';
import { FormsModule } from '@angular/forms';
import { ProcComponent } from './proc/proc.component';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    ComparasionComponent,
    ProcComponent,
    ArticleComponent,
    AddArticleComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
