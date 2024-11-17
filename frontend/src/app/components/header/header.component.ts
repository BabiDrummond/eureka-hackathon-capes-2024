import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-gray-800 p-4 flex justify-between items-center">
      <div class="flex items-center">
        <lucide-icon name="lightbulb" class="w-8 h-8 mr-2"></lucide-icon>
        <span class="text-xl font-bold">Eureka</span>
      </div>
      <div class="flex items-center" *ngIf="(profileService.selectedProfile$ | async) as profile">
        <button (click)="navigateToProfiles()" class="flex items-center">
          <lucide-icon name="arrow-left" class="mr-2"></lucide-icon>
          <span>João da Silva</span>
          <span class="ml-2" [class]="profile.color">{{profile.icon}}</span>
        </button>
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor(
    private router: Router,
    public profileService: ProfileService
  ) {}

  navigateToProfiles(): void {
    this.router.navigate(['/profiles']);
  }
}