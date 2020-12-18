import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FindAllMoviesComponent } from './find-all-movies/find-all-movies.component';
import { QueryMoviesComponent } from './query-movies/query-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { FindAllArtistesComponent } from './find-all-artistes/find-all-artistes.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    FindAllMoviesComponent,
    QueryMoviesComponent,
    FindAllArtistesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
