import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProjectDescriptionComponent } from './pages/project-description/project-description.component';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'project', component: ProjectDescriptionComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: '' }
];
