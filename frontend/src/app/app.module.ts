import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileSelectionComponent } from './components/profile-selection/profile-selection.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { ArticleListingComponent } from './components/article-listing/article-listing.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LoginComponent } from './components/login/login.component';
import { TeamComponent } from './components/team/team.component';

import { AuthGuard } from './guards/auth.guard';

import { LucideAngularModule, Search, ChevronLeft, ChevronRight, ThumbsUp, BookmarkPlus, Share2, ArrowLeft, Menu, Lightbulb, SlidersHorizontal, X } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileSelectionComponent,
    ProjectDescriptionComponent,
    ArticleListingComponent,
    ArticleCardComponent,
    AdvancedSearchComponent,
    SideMenuComponent,
    LoginComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'profiles', component: ProfileSelectionComponent, canActivate: [AuthGuard] },
      { path: 'project', component: ProjectDescriptionComponent, canActivate: [AuthGuard] },
      { path: 'articles', component: ArticleListingComponent, canActivate: [AuthGuard] },
      { path: 'team', component: TeamComponent, canActivate: [AuthGuard] }
    ]),
    LucideAngularModule.pick({
      Search, ChevronLeft, ChevronRight, ThumbsUp, BookmarkPlus, 
      Share2, ArrowLeft, Menu, Lightbulb, SlidersHorizontal, X
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }