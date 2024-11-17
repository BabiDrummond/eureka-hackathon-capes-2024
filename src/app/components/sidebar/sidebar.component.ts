import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="w-64 bg-gray-800 min-h-screen p-4">
      <nav class="space-y-4">
        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-4">Perfis</h2>
          <ul class="space-y-2">
            <li class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
              <span>🔬</span>
              <span>Especialista</span>
            </li>
            <li class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
              <span>💡</span>
              <span>Inovador</span>
            </li>
            <li class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
              <span>👥</span>
              <span>Colaborador</span>
            </li>
            <li class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
              <span>📊</span>
              <span>Analista</span>
            </li>
            <li class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
              <span>📢</span>
              <span>Comunicador</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-4">Menu</h2>
          <ul class="space-y-2">
            <li class="p-2 hover:bg-gray-700 rounded cursor-pointer">Meus Artigos</li>
            <li class="p-2 hover:bg-gray-700 rounded cursor-pointer">Equipe</li>
            <li class="p-2 hover:bg-gray-700 rounded cursor-pointer">Sair</li>
          </ul>
        </div>
      </nav>
    </aside>
  `
})
export class SidebarComponent {}