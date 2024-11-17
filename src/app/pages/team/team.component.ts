import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  skill: string;
  avatar: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-900 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-8">Nossa Equipe</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (member of team; track member.name) {
            <div class="bg-gray-800 p-6 rounded-lg">
              <div class="flex items-center space-x-4">
                <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                  {{ member.avatar }}
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">{{ member.name }}</h3>
                  <p class="text-gray-400">{{ member.skill }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class TeamComponent {
  team: TeamMember[] = [
    { name: 'Moises', skill: 'Negócios', avatar: '👨‍💼' },
    { name: 'Laira', skill: 'Marketing', avatar: '👩‍💼' },
    { name: 'Erick Andres Tavares', skill: 'Desenvolvimento', avatar: '👨‍💻' },
    { name: 'Daniel', skill: 'Negócios', avatar: '👨‍💼' },
    { name: 'Bárbara Drummond', skill: 'Desenvolvimento', avatar: '👩‍💻' }
  ];
}