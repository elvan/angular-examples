import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleIndexComponent } from './article/article-index/article-index.component';

const routes: Routes = [{ path: '', component: ArticleIndexComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
