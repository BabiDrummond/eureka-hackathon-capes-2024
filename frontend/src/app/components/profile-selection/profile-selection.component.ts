import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService, Profile } from '../../services/profile.service';

@Component({
  selector: 'app-profile-selection',
  template: `
    <div>
      <h1 class="text-3xl font-bold mb-6">Selecione seu Perfil</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          *ngFor="let profile of profileService.profiles"
          class="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700"
          (click)="selectProfile(profile)"
        >
          <div class="flex items-center mb-2">
            <span [class]="profile.color + ' text-2xl mr-2'">{{profile.icon}}</span>
            <h2 class="text-xl font-semibold">{{profile.name}}</h2>
          </div>
          <p>{{profile.description}}</p>
        </div>
      </div>
    </div>
  `
})
export class ProfileSelectionComponent {
  constructor(
    public profileService: ProfileService,
    private router: Router
  ) {}

  selectProfile(profile: Profile): void {
    this.profileService.selectProfile(profile);
    this.router.navigate(['/project']);
  }
}