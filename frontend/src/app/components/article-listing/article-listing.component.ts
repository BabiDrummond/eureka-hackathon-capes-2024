import { Component } from '@angular/core';
import { ArticleService, Article } from '../../services/article.service';

@Component({
  selector: 'app-article-listing',
  template: `
    <div>
      <h1 class="text-3xl font-bold mb-6">Artigos Recomendados</h1>
      
      <!-- Search Bar -->
      <div class="mb-6 relative">
        <div class="flex">
          <input
            type="text"
            [(ngModel)]="searchQuery"
            (input)="onSearch()"
            class="flex-grow bg-gray-800 text-white p-2 rounded-l-lg"
            placeholder="Buscar artigos..."
          />
          <button 
            class="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
            (click)="toggleAdvancedSearch()"
          >
            <lucide-icon [name]="showAdvancedSearch ? 'x' : 'sliders-horizontal'"></lucide-icon>
          </button>
          <button 
            class="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
            (click)="search()"
          >
            <lucide-icon name="search"></lucide-icon>
          </button>
        </div>

        <!-- Advanced Search -->
        <app-advanced-search
          *ngIf="showAdvancedSearch"
          (search)="onAdvancedSearch($event)"
        ></app-advanced-search>
      </div>

      <!-- Articles List -->
      <div class="grid gap-4">
        <app-article-card
          *ngFor="let article of articles"
          [article]="article"
          (like)="onLike($event)"
        ></app-article-card>
      </div>

      <!-- Pagination -->
      <div class="mt-6 flex justify-center">
        <button 
          class="mr-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600"
          (click)="previousPage()"
        >
          <lucide-icon name="chevron-left"></lucide-icon>
        </button>
        <span class="mx-4">Página {{currentPage}}</span>
        <button 
          class="ml-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600"
          (click)="nextPage()"
        >
          <lucide-icon name="chevron-right"></lucide-icon>
        </button>
      </div>
    </div>
  `
})
export class ArticleListingComponent {
  searchQuery: string = '';
  showAdvancedSearch: boolean = false;
  currentPage: number = 1;
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles().subscribe(
      articles => this.articles = articles
    );
  }

  onSearch(): void {
    if (this.searchQuery.length > 2) {
      this.articleService.searchArticles(this.searchQuery).subscribe(
        articles => this.articles = articles
      );
    }
  }

  search(): void {
    this.onSearch();
  }

  toggleAdvancedSearch(): void {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  onAdvancedSearch(filters: any): void {
    // Implement advanced search logic
  }

  onLike(articleId: number): void {
    this.articleService.toggleLike(articleId);
    this.loadArticles();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    this.currentPage++;
  }
}