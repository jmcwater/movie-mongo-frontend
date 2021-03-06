import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Movie } from '../../movies/movie.model';

import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  id: number;
  editMode = false;
  movieForm: FormGroup;
  movie: Movie;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.movieService.currentMovie.subscribe(movie => this.movie = movie);

    this.route.params.subscribe();

    this.initForm();

  }

  onSubmit() {
    const newMovie = new Movie((
        this.movieForm.value['title'],
        this.movieForm.value['genre'],
        this.movieForm.value['description'],
        this.movieForm.value['imagePath'],
        this.movieForm.value['age']));

    this.movieService.updateMovie(this.movieForm.value);

    this.movieService.getMovies()

    this.router.navigate(['../'], {relativeTo: this.route});
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let movieName = this.movie.title;
    let movieImagePath = this.movie.imagePath;
    let movieDescription = this.movie.description;
    let minimalAge = this.movie.age;
    let movieGenre = this.movie.genre;

    this.movieForm = new FormGroup({
      'title': new FormControl(movieName, Validators.required),
      'imagePath': new FormControl(movieImagePath),
      'description': new FormControl(movieDescription, Validators.required),
      'age': new FormControl(minimalAge, Validators.required),
      'genre': new FormControl(movieGenre, Validators.required)
    });

  }

}
