import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-gray-900 text-white">
      <app-header></app-header>
      <main class="container mx-auto p-4">
        <router-outlet></router-outlet>
      </main>
      <app-side-menu></app-side-menu>
    </div>
  `
})
export class AppComponent {}