import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Article {
  title: string;
  body: number;
}

export interface ArticleId extends Article {
  id: string;
}

@Component({
  selector: 'app-article-index',
  templateUrl: './article-index.component.html',
  styleUrls: ['./article-index.component.css'],
})
export class ArticleIndexComponent implements OnInit {
  private articleCollection: AngularFirestoreCollection<Article>;
  articles: Observable<ArticleId[]>;

  constructor(private firestore: AngularFirestore) {
    this.articleCollection = this.firestore.collection<Article>('articles');
    this.articles = this.articleCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Article;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  ngOnInit(): void {}
}
