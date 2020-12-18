import { QueryMoviesComponent } from './query-movies/query-movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindAllMoviesComponent } from './find-all-movies/find-all-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FindAllArtistesComponent } from './find-all-artistes/find-all-artistes.component';

const routes: Routes = [
  {path: '', redirectTo: '/findAllArtistes', pathMatch: 'full'},
  {
    path: 'findAllMovies',
    component: FindAllMoviesComponent
  },
  {
    path: 'query-movies',
    component: QueryMoviesComponent
  },
  {
    path: 'movieDetails/:idMovie',
    component: MovieDetailsComponent
  },
  {
    path: 'findAllArtistes',
    component: FindAllArtistesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
