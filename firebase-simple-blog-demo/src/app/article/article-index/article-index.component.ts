import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-index',
  templateUrl: './article-index.component.html',
  styleUrls: ['./article-index.component.css'],
})
export class ArticleIndexComponent implements OnInit {
  articles: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.articles = this.firestore.collection('articles').valueChanges();
  }

  ngOnInit(): void {}
}
