import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  saveProjectDescription(description: string) {
    localStorage.setItem('projectDescription', description);
  }

  getProjectDescription(): string {
    return localStorage.getItem('projectDescription') || '';
  }
}