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
      this.theatreForm.value['theatres'],
        this.theatreForm.value['city'],
        this.theatreForm.value['adress'],
        this.theatreForm.value['zipcode'],
        this.theatreForm.value['phoneNumber']));

    this.theatreService.addTheatre(this.theatreForm.value);

    this.theatreService.getTheatres()

    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let theatreName = '';
    let theatreCity = '';
    let theatreAdress = '';
    let theatreZipcode = '';
    let theatrePhoneNumber = '';

    this.theatreForm = new FormGroup({
      'theatres': new FormControl(theatreName, Validators.required),
      'city': new FormControl(theatreCity),
      'adress': new FormControl(theatreAdress),
      'zipcode': new FormControl(theatreZipcode),
      'phoneNumber': new FormControl(theatrePhoneNumber),
    });
  }

}
