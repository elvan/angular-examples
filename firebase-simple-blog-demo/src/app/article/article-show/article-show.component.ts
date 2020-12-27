import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

interface Article {
  title: string;
  body: number;
}

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css'],
})
export class ArticleShowComponent implements OnInit {
  private articleDoc: AngularFirestoreDocument<Article>;
  article: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    const articletId = this.route.snapshot.paramMap.get('id');
    this.articleDoc = this.firestore.doc<Article>(`articles/${articletId}`);
    this.article = this.articleDoc.valueChanges();
  }
}
