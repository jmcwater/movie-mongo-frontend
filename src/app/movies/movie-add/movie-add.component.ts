import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Movie } from '../../movies/movie.model';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  id: number;
  editMode = false;
  movieForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    const newMovie = new Movie((
        this.movieForm.value['title'],
        this.movieForm.value['description'],
        this.movieForm.value['imagePath'],
          this.movieForm.value['genre'],
        this.movieForm.value['age']));

    this.movieService.addMovie(this.movieForm.value);

    this.movieService.getMovies()

    this.router.navigate(['../'], {relativeTo: this.route});

    // herladen van de page om nieuwe db entries te kunnen zien
    // window.location.reload();
  }

  onAddDatePlaying() {
    (<FormArray>this.movieForm.get('datePlaying')).push(
      new FormGroup({
        'datePlaying': new FormControl(null, Validators.required),
        'timePLaying': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteDatePlaying(index: number) {
    (<FormArray>this.movieForm.get('datePlaying')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let movieName = '';
    let movieImagePath = '';
    let movieDescription = '';
    let minimalAge = '';
    let movieGenre = '';

    this.movieForm = new FormGroup({
      'title': new FormControl(movieName, Validators.required),
      'imagePath': new FormControl(movieImagePath),
      'description': new FormControl(movieDescription, Validators.required),
      'age': new FormControl(minimalAge, Validators.required),
      'genre': new FormControl(movieGenre, Validators.required),
    });

    // this.onAddDatePlaying();
  }

}
