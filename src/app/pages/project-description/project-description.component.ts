import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-900 p-8">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-8">Descreva seu Projeto</h1>
        
        <div class="bg-gray-800 p-6 rounded-lg">
          <textarea
            [(ngModel)]="description"
            class="w-full h-48 bg-gray-700 text-white rounded-lg p-4 mb-4"
            placeholder="Descreva seu projeto de pesquisa aqui..."
          ></textarea>
          
          <div class="flex justify-end space-x-4">
            <button
              (click)="goBack()"
              class="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              Voltar
            </button>
            <button
              (click)="saveAndContinue()"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectDescriptionComponent {
  description: string = '';

  constructor(private router: Router) {
    // Carrega a descrição do projeto, se já houver uma salva
    const savedDescription = localStorage.getItem('projectDescription');
    if (savedDescription) {
      this.description = savedDescription;
    }
  }

  saveAndContinue() {
    // Salva a descrição do projeto no localStorage
    localStorage.setItem('projectDescription', this.description);

    // Redireciona para a próxima página (artigos)
    this.router.navigate(['/articles']);
  }

  goBack() {
    // Redireciona de volta à página inicial
    this.router.navigate(['/']);
  }
}
