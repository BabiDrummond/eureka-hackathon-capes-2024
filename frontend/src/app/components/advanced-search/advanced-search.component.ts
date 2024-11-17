import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  template: `
    <div class="absolute top-full left-0 right-0 mt-2 bg-gray-800 p-4 rounded-lg shadow-lg z-10">
      <form (ngSubmit)="onSubmit()" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium mb-1">Data Inicial</label>
          <input type="date" [(ngModel)]="filters.startDate" name="startDate" 
                 class="w-full bg-gray-700 rounded p-2">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Data Final</label>
          <input type="date" [(ngModel)]="filters.endDate" name="endDate" 
                 class="w-full bg-gray-700 rounded p-2">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Tipo de Publicação</label>
          <select [(ngModel)]="filters.type" name="type" 
                  class="w-full bg-gray-700 rounded p-2">
            <option value="">Todos</option>
            <option value="article">Artigo Científico</option>
            <option value="review">Revisão</option>
            <option value="thesis">Tese</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Área de Conhecimento</label>
          <select [(ngModel)]="filters.area" name="area" 
                  class="w-full bg-gray-700 rounded p-2">
            <option value="">Todas</option>
            <option value="cs">Computação</option>
            <option value="eng">Engenharia</option>
            <option value="bio">Biologia</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Idioma</label>
          <select [(ngModel)]="filters.language" name="language" 
                  class="w-full bg-gray-700 rounded p-2">
            <option value="">Todos</option>
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
            <option value="es">Espanhol</option>
          </select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="flex items-center">
            <input type="checkbox" [(ngModel)]="filters.openAccess" name="openAccess" 
                   class="mr-2">
            Acesso Aberto
          </label>
          <label class="flex items-center">
            <input type="checkbox" [(ngModel)]="filters.peerReviewed" name="peerReviewed" 
                   class="mr-2">
            Revisado por Pares
          </label>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Citações (Mínimo)</label>
          <input type="number" [(ngModel)]="filters.minCitations" name="minCitations" 
                 class="w-full bg-gray-700 rounded p-2">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Citações (Máximo)</label>
          <input type="number" [(ngModel)]="filters.maxCitations" name="maxCitations" 
                 class="w-full bg-gray-700 rounded p-2">
        </div>
        <button type="submit" 
                class="md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Aplicar Filtros
        </button>
      </form>
    </div>
  `
})
export class AdvancedSearchComponent {
  @Output() search = new EventEmitter<any>();

  filters = {
    startDate: '',
    endDate: '',
    type: '',
    area: '',
    language: '',
    openAccess: false,
    peerReviewed: false,
    minCitations: '',
    maxCitations: ''
  };

  onSubmit(): void {
    this.search.emit(this.filters);
  }
}