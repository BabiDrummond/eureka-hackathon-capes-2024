import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

@Component({
  selector: 'app-team',
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Nossa Equipe</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let member of team" 
             class="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center">
          <img [src]="member.avatar" 
               [alt]="member.name"
               class="w-32 h-32 rounded-full mb-4 object-cover">
          <h3 class="text-xl font-semibold mb-2">{{member.name}}</h3>
          <p class="text-blue-400 mb-4">{{member.role}}</p>
          <p class="text-gray-400">{{member.description}}</p>
        </div>
      </div>
    </div>
  `
})
export class TeamComponent {
  team: TeamMember[] = [
    {
      name: 'Bárbara Drummond',
      role: 'Desenvolvimento',
      avatar: 'https://i.ibb.co/Y86s6kG/IMG-20240907-162609.jpg',
      description: 'Apaixonada por tecnologia, gosto de desenvolver software, jogos e interfaces (UI).'
    },
    {
      name: 'Daniel Espindola',
      role: 'Negócio',
      avatar: 'https://i.ibb.co/rk3Cjn3/IMG-4668.jpg',
      description: 'Responsável pelo negócio.'
    },
    {
      name: 'Erick Andres Tavares',
      role: 'Desenvolvimento',
      avatar: 'https://i.ibb.co/w6Vnncf/157928039.jpg',
      description: 'Estudante de Análise e desenvolvimento de sistema com experiência na criação de api e Dashboards dinâmicas.'
    },
    {
      name: 'Laira Lisboa',
      role: 'Marketing',
      avatar: 'https://i.ibb.co/zNtpJXB/Captura-de-tela-2024-11-14-195431.png',
      description: 'Especialista em marketing.'
    },
    {
      name: 'Moises Rabelo',
      role: 'Negócio / Designer',
      avatar: 'https://i.ibb.co/MGJdxz9/IMG-20241109-205929.jpg',
      description: 'Designer de produto com mais de 10 anos de experiência em TI, focado em melhorar a experiência de produtos digitais.'
    },
  ];
}