import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MoviesPlayingService} from '../movies-playing.service';
import {DatePlaying} from '../../shared/datePlaying.model';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {
  id: number;
  editMode = false;
  moviesForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private moviesService: MoviesPlayingService,
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
    const newDate = new DatePlaying((
      this.moviesForm.value['datePlaying'],
        this.moviesForm.value['timePlaying'],
        this.moviesForm.value['movies']));


    this.moviesService.addDatePlaying(this.moviesForm.value);

    this.moviesService.getDatesPlaying()

    this.router.navigate(['../'], {relativeTo: this.route});

    // herladen van de page om nieuwe db entries te kunnen zien
    // window.location.reload();
  }

  onAddMovie() {
    (<FormArray>this.moviesForm.get('movies')).push(
      new FormGroup({
        'title': new FormControl(null, Validators.required),
        'genre': new FormControl(null, Validators.required),
        'theatres': new FormControl(null, Validators.required),
        'timePlaying': new FormControl(null, Validators.required),
        'imagePath': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteMovie(index: number) {
    (<FormArray>this.moviesForm.get('movies')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let datePlayingString = '';
    let timePlayingString = '';
    let moviesArray = new FormArray([]);

    this.moviesForm = new FormGroup({
      'datePlaying': new FormControl(datePlayingString, Validators.required),
      'timePlaying': new FormControl(timePlayingString),
      'movies': moviesArray
    });

    this.onAddMovie();
  }

}
