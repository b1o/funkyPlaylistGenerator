import { MusicSearchComponent } from './components/music-search/music-search.component';
import { AuthComponent } from './components/auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'generator', component: MusicSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
