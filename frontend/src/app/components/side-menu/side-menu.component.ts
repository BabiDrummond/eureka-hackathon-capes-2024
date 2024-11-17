import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-menu',
  template: `
    <div 
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      (click)="toggleMenu()"
    ></div>
    
    <div 
      class="fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 z-50"
      [class.translate-x-0]="isOpen"
      [class.translate-x-full]="!isOpen"
    >
      <div class="p-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Menu</h2>
          <button (click)="toggleMenu()">
            <lucide-icon name="x"></lucide-icon>
          </button>
        </div>
        
        <nav class="space-y-4">
          <a 
            *ngFor="let item of menuItems"
            [routerLink]="item.route"
            class="block py-2 px-4 hover:bg-gray-700 rounded-lg"
            (click)="handleMenuClick(item)"
          >
            {{item.label}}
          </a>
        </nav>
      </div>
    </div>
    
    <button 
      (click)="toggleMenu()"
      class="fixed top-4 right-4 p-2 bg-gray-700 rounded-full hover:bg-gray-600 z-30"
    >
      <lucide-icon name="menu"></lucide-icon>
    </button>
  `
})
export class SideMenuComponent {
  isOpen = false;
  
  menuItems = [
    { label: 'Mudar perfil', route: '/profiles' },
    { label: 'Meus artigos', route: '/articles' },
    { label: 'Equipe', route: '/team' },
    { label: 'Sair', route: '/login', action: 'logout' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  handleMenuClick(item: any): void {
    if (item.action === 'logout') {
      this.authService.logout();
    }
    this.toggleMenu();
  }
}