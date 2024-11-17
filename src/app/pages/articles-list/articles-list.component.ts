import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenAlexService, Article } from '../../services/openalex.service';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-100 text-black"> <!-- Alterei para bg-gray-100 para depuração -->
      <header class="bg-gray-800 p-4">
        <h1 class="text-xl font-semibold text-center text-white">Artigos Relevantes</h1>
      </header>

      <main class="container mx-auto p-4">
        <input
          type="text"
          placeholder="Buscar artigos..."
          [(ngModel)]="searchQuery"
          (input)="fetchArticles()"
          class="w-full mb-4 p-2 rounded bg-gray-700 text-white"
        />

        <div *ngIf="loading" class="text-center">Carregando...</div>
        <div *ngIf="!loading && articles.length === 0" class="text-center">
          Nenhum artigo encontrado.
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            *ngFor="let article of articles"
            class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
          >
            <h2 class="text-lg font-bold text-white">{{ article.title }}</h2>
            <p class="text-sm text-gray-400">
              Autores: {{ article.authors.join(', ') || 'Não Informado' }}
            </p>
            <p class="text-sm text-white">{{ article.abstract || 'Sem resumo disponível' }}</p>
            <a
              href="{{ article.url }}"
              target="_blank"
              class="text-blue-400 underline mt-2 inline-block"
              >Leia mais</a
            >
          </div>
        </div>

        <div class="text-center mt-4">
          <button
            (click)="changePage(-1)"
            [disabled]="page <= 1"
            class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Anterior
          </button>
          <span class="mx-4 text-white">Página {{ page }}</span>
          <button
            (click)="changePage(1)"
            class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Próxima
          </button>
        </div>
      </main>
    </div>
  `,
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];
  searchQuery = '';
  page = 1;
  loading = false;

  constructor(private openAlexService: OpenAlexService) {}

  ngOnInit() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.loading = true;

    this.openAlexService.getArticles(this.searchQuery, this.page).subscribe({
      next: (data) => {
        console.log('Dados do OpenAlex:', data); // Log para depuração
        if (data && data.results) {
          this.articles = data.results.map((item: any) => ({
            id: item.id,
            title: item.title,
            authors: item.authorships.map((a: any) => a.author.display_name),
            abstract: item.abstract_inverted_index
              ? Object.keys(item.abstract_inverted_index).join(' ')
              : null,
            url: `https://openalex.org/${item.id}`, // Gerando URL com base no ID
          }));
        } else {
          console.error('Nenhum dado de artigo encontrado:', data);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar artigos:', err);
        this.articles = [];
        this.loading = false;
      },
    });
  }

  changePage(step: number) {
    this.page += step;
    this.fetchArticles();
  }
}
