import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Article {
  id: number;
  title: string;
  description: string;
  source: string;
  likes: number;
  date: string;
  type: string;
  area: string;
  language: string;
  openAccess: boolean;
  peerReviewed: boolean;
  citations: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Avanços em Inteligência Artificial e Aprendizado Profundo',
      description: 'Uma análise abrangente dos últimos desenvolvimentos em IA.',
      source: 'Journal of AI Research',
      likes: 156,
      date: '2024-03-15',
      type: 'Artigo Científico',
      area: 'Computação',
      language: 'Inglês',
      openAccess: true,
      peerReviewed: true,
      citations: 45
    },
    {
      id: 2,
      title: 'Sustentabilidade na Indústria 4.0',
      description: 'Práticas sustentáveis em processos industriais modernos.',
      source: 'Green Tech Magazine',
      likes: 89,
      date: '2024-03-10',
      type: 'Artigo Técnico',
      area: 'Engenharia',
      language: 'Português',
      openAccess: true,
      peerReviewed: false,
      citations: 12
    }
  ];

  searchArticles(query: string): Observable<Article[]> {
    return of(this.articles).pipe(
      map(articles => articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
      ))
    );
  }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  toggleLike(articleId: number): void {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      article.likes = article.likes + 1;
    }
  }
}