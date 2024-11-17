import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../services/article.service';

@Component({
  selector: 'app-article-card',
  template: `
    <div class="bg-gray-800 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-2">{{article.title}}</h2>
      <p class="mb-2">{{article.description}}</p>
      <p class="text-sm text-gray-400 mb-4">Fonte: {{article.source}}</p>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <button 
            class="flex items-center hover:text-blue-500"
            (click)="onLike()"
          >
            <lucide-icon name="thumbs-up" class="mr-1"></lucide-icon>
            <span>{{article.likes}}</span>
          </button>
        </div>
        <div class="flex space-x-2">
          <button class="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <lucide-icon name="bookmark-plus"></lucide-icon>
          </button>
          <button class="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <lucide-icon name="share-2"></lucide-icon>
          </button>
        </div>
      </div>
    </div>
  `
})
export class ArticleCardComponent {
  @Input() article!: Article;
  @Output() like = new EventEmitter<number>();

  onLike(): void {
    this.like.emit(this.article.id);
  }
}