import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Profile {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private selectedProfileSubject = new BehaviorSubject<Profile | null>(null);
  selectedProfile$ = this.selectedProfileSubject.asObservable();

  readonly profiles: Profile[] = [
    {
      id: 'specialist',
      name: 'Especialista',
      description: 'Possui conhecimento aprofundado em uma área específica.',
      color: 'bg-purple-500',
      icon: '👨‍🔬'
    },
    {
      id: 'innovator',
      name: 'Inovador',
      description: 'Gera novas ideias e soluções.',
      color: 'bg-blue-500',
      icon: '💡'
    },
    {
      id: 'collaborator',
      name: 'Colaborador',
      description: 'Trabalha bem em equipe e constrói relacionamentos.',
      color: 'bg-green-500',
      icon: '🤝'
    },
    {
      id: 'analyst',
      name: 'Analista',
      description: 'Utiliza dados e métodos quantitativos para analisar informações.',
      color: 'bg-yellow-500',
      icon: '📊'
    },
    {
      id: 'communicator',
      name: 'Comunicador',
      description: 'Expressa ideias de forma clara e persuasiva.',
      color: 'bg-red-500',
      icon: '🎯'
    }
  ];

  selectProfile(profile: Profile) {
    this.selectedProfileSubject.next(profile);
    localStorage.setItem('selectedProfile', JSON.stringify(profile));
  }

  getSelectedProfile(): Profile | null {
    const stored = localStorage.getItem('selectedProfile');
    return stored ? JSON.parse(stored) : null;
  }
}