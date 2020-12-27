import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleIndexComponent } from './article/article-index/article-index.component';
import { ArticleShowComponent } from './article/article-show/article-show.component';

const routes: Routes = [
  { path: '', component: ArticleIndexComponent },
  { path: 'articles/:id', component: ArticleShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
