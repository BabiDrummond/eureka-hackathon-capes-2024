import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-description',
  template: `
    <div>
      <h1 class="text-3xl font-bold mb-6">Descreva seu Projeto de Pesquisa</h1>
      <form (ngSubmit)="onSubmit()">
        <textarea
          [(ngModel)]="projectDescription"
          name="description"
          class="w-full h-40 bg-gray-800 text-white p-2 rounded-lg"
          placeholder="Descreva seu projeto aqui..."
        ></textarea>
        <button 
          type="submit"
          class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Salvar e Continuar
        </button>
      </form>
    </div>
  `
})
export class ProjectDescriptionComponent implements OnInit {
  projectDescription: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('projectDescription');
    if (saved) {
      this.projectDescription = saved;
    }
  }

  onSubmit(): void {
    localStorage.setItem('projectDescription', this.projectDescription);
    this.router.navigate(['/articles']);
  }
}