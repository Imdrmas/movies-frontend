import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/Movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  idMovie: string;
  movies: Movie[];
  movie: Movie = new Movie();

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idMovie = this.route.snapshot.params.idMovie;
    this.movieService.getMovieByDetails(this.idMovie).subscribe(data => {
      this.movies = data;
      this.movies.forEach(movie => {
        this.movie = movie;
      });
    });
  }
}
