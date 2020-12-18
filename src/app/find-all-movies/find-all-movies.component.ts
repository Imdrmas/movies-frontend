import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-find-all-movies',
  templateUrl: './find-all-movies.component.html',
  styleUrls: ['./find-all-movies.component.scss'],
})
export class FindAllMoviesComponent implements OnInit {
  spinnerLoad = true;
  showTable = false;
  collection = [];
  allNumber: number;
  p = 0;

  constructor(private movieService: MovieService, private router: Router) {

  }

  ngOnInit() {
       this.movieService.findAllMovies().subscribe(data => {
         this.collection = data;
         this.spinnerLoad = false;
         this.showTable = true;
         this.allNumber = this.collection.length;
       });
  }

  movieDetails(id: string) {
    this.router.navigate(['movieDetails/', id]);
  }

}
