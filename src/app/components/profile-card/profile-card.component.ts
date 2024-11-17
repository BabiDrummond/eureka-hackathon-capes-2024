import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Profile {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center p-6 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700">
      <div class="text-4xl mb-4">{{ profile.icon }}</div>
      <h3 class="text-lg font-semibold">{{ profile.title }}</h3>
      <p class="text-sm text-gray-400">{{ profile.description }}</p>
    </div>
  `
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}