import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Adicionar importação do Router
import { Profile } from '../../services/profile.service';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  template: `
    <div class="min-h-screen bg-gray-900 text-white">
      <nav class="p-4 flex justify-between items-center">
        <div class="flex items-center">
          <span class="text-2xl">💡</span>
          <span class="ml-2 text-xl font-semibold text-yellow-300">Eureka</span>
          <span class="ml-4 text-gray-400">Descubra, Pesquise, Inove.</span>
        </div>
        <div class="space-x-4">
          <button class="text-gray-300 hover:text-white">Entrar</button>
          <button class="bg-yellow-300 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-400">
            Cadastrar
          </button>
        </div>
      </nav>

      <main class="container mx-auto px-4 py-16 text-center">
        <h1 class="text-5xl font-bold mb-6">Quem está pesquisando?</h1>
        <p class="text-xl text-gray-400 mb-12">
          Escolha um perfil para receber resultados mais relevantes!
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <app-profile-card
            *ngFor="let profile of profiles"
            [profile]="profile"
            (click)="selectProfile(profile)"
          />
          <div class="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700">
            <div class="text-4xl mb-4">+</div>
            <h3 class="text-lg font-semibold">Personalizado</h3>
            <p class="text-sm text-gray-400">
              Adapta-se às preferências do usuário (Necessário Login)
            </p>
          </div>
        </div>
      </main>
    </div>
  `
})
export class LandingPageComponent {
  profiles: Profile[] = [
    {
      id: 'specialist',
      title: 'Especialista',
      description: 'Prioriza artigos científicos profundos e revisões de alta relevância.',
      icon: '🔬'
    },
    {
      id: 'innovator',
      title: 'Inovador',
      description: 'Destaca novas ideias e tecnologias disruptivas.',
      icon: '💡'
    },
    {
      id: 'collaborator',
      title: 'Colaborador',
      description: 'Foca em artigos colaborativos e interdisciplinares.',
      icon: '👥'
    },
    {
      id: 'analyst',
      title: 'Analista',
      description: 'Realça estudos quantitativos e empíricos com dados abertos.',
      icon: '📊'
    },
    {
      id: 'communicator',
      title: 'Comunicador',
      description: 'Prioriza artigos de fácil compreensão e impacto social.',
      icon: '📢'
    }
  ];

  constructor(private router: Router) {}

  selectProfile(profile: Profile) {
    console.log('Selected profile:', profile);
    // Armazena a seleção e navega para a página de artigos
    this.router.navigate(['/project']);
  }
}
