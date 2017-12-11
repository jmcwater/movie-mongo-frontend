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
  title: string;
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
          this.title = params['title'];
          this.editMode = params['title'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    const newMovie = new Movie((
        this.movieForm.value['title'],
        this.movieForm.value['genre'],
        this.movieForm.value['description'],
        this.movieForm.value['imagePath'],
        this.movieForm.value['age']));

    this.movieService.addMovie(this.movieForm.value);

    this.movieService.getMovies()

    this.router.navigate(['../'], {relativeTo: this.route});

    // herladen van de page om nieuwe db entries te kunnen zien
    // window.location.reload();
  }

  // onAddIngredient() {
  //   (<FormArray>this.movieForm.get('movies')).push(
  //     new FormGroup({
  //       'title': new FormControl(null, Validators.required),
  //       'amount': new FormControl(null, [
  //         Validators.required,
  //         Validators.pattern(/^[1-9]+[0-9]*$/)
  //       ])
  //     })
  //   );
  // }
//
//   onDeleteIngredient(index: number) {
//     (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
//   }
//
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
      'genre': new FormControl(movieGenre, Validators.required)
    });

    // this.onAddIngredient();
  }

}
