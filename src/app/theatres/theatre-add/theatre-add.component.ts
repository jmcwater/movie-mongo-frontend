import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TheatreService} from '../theatre.service';
import {Theatre} from '../theatre.model';

@Component({
  selector: 'app-theatre-add',
  templateUrl: './theatre-add.component.html',
  styleUrls: ['./theatre-add.component.css']
})
export class TheatreAddComponent implements OnInit {
  id: number;
  editMode = false;
  theatreForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private theatreService: TheatreService,
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
    const newTheatre = new Theatre((
      this.theatreForm.value['theatre'],
        this.theatreForm.value['city']));

    this.theatreService.addTheatre(this.theatreForm.value);

    this.theatreService.getTheatres()

    this.router.navigate(['../'], {relativeTo: this.route});

    // herladen van de page om nieuwe db entries te kunnen zien
    // window.location.reload();
  }

  // onAddTheatre() {
  //   (<FormArray>this.movieForm.get('datePlaying')).push(
  //     new FormGroup({
  //       'datePlaying': new FormControl(null, Validators.required),
  //       'timePLaying': new FormControl(null, Validators.required)
  //     })
  //   );
  // }

  // onDeleteDatePlaying(index: number) {
  //   (<FormArray>this.movieForm.get('datePlaying')).removeAt(index);
  // }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let theatreName = '';
    let theatreCity = '';

    this.theatreForm = new FormGroup({
      'theatre': new FormControl(theatreName, Validators.required),
      'city': new FormControl(theatreCity),
    });

    // this.onAddDatePlaying();
  }

}
