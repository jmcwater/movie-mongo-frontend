import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Movie } from '../../movies/movie.model';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movie: Movie;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.movieService.currentMovie.subscribe(movie => this.movie = movie);

    this.route.params.subscribe();

  }

  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  onEditMovie() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteMovie() {
    this.movieService.deleteMovie(this.movie.title);
    this.router.navigate(['/movies']);
  }

}
