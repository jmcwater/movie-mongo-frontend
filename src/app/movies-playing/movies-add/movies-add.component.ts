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
        this.moviesForm.value['timePlaying']
    ));


    this.moviesService.addDatePlaying(this.moviesForm.value);

    this.moviesService.getDatesPlaying()

    this.router.navigate(['../'], {relativeTo: this.route});

  }

  onDeleteMovie(index: number) {
    (<FormArray>this.moviesForm.get('movie')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let datePlayingString = '';
    let timePlayingString = '';

    this.moviesForm = new FormGroup({
      'datePlaying': new FormControl(datePlayingString, Validators.required),
      'timePlaying': new FormControl(timePlayingString),
    });
  }

}
