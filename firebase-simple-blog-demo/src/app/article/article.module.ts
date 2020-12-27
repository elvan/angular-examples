import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleShowComponent } from './article-show/article-show.component';

@NgModule({
  declarations: [ArticleIndexComponent, ArticleShowComponent],
  imports: [CommonModule, ArticleRoutingModule],
})
export class ArticleModule {}
