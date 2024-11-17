import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-2xl">💡</span>
          <h1 class="text-xl font-bold ml-2">Eureka</h1>
        </div>
        <div class="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Buscar artigos..."
            class="px-4 py-2 rounded bg-gray-700 text-white"
          />
          <button class="bg-blue-600 px-4 py-2 rounded">Busca Avançada</button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}