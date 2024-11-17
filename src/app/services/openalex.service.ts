import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Ajuste da interface 'Article' com as propriedades esperadas
export interface Article {
  id: string;
  title: string;
  abstract: string | null;  // O 'abstract' pode ser uma string ou null
  authors: string[];  // Lista de autores como strings
  url: string;  // Campo URL gerado a partir do 'id'
}

@Injectable({
  providedIn: 'root',
})
export class OpenAlexService {
  private readonly apiUrl = 'https://api.openalex.org/works'; // URL da API do OpenAlex

  constructor(private http: HttpClient) {}

  // Método para pegar artigos da API com busca e paginação
  getArticles(searchQuery: string, page: number): Observable<any> {
    const params = {
      search: searchQuery,
      page: page.toString(),
    };

    return this.http.get<any>(this.apiUrl, { params });
  }
}
