import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Profile {
  id: string;
  title: string;
  description: string;
  icon: string;
  color?: string; // Você pode adicionar o campo 'color' caso precise
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private selectedProfileSubject = new BehaviorSubject<Profile | null>(null);
  selectedProfile$ = this.selectedProfileSubject.asObservable();

  setSelectedProfile(profile: Profile) {
    this.selectedProfileSubject.next(profile);
    localStorage.setItem('selectedProfile', JSON.stringify(profile));
  }

  getSelectedProfile(): Profile | null {
    const stored = localStorage.getItem('selectedProfile');
    return stored ? JSON.parse(stored) : null;
  }
}
