import { Component, OnInit } from '@angular/core';
import {Theatre} from '../theatre.model';
import {TheatreService} from '../theatre.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-theatre-detail',
  templateUrl: './theatre-detail.component.html',
  styleUrls: ['./theatre-detail.component.css']
})
export class TheatreDetailComponent implements OnInit {
  id: number;
  theatres: Theatre;

  constructor(private theatreService: TheatreService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.theatreService.currentTheatre.subscribe(theatre => this.theatres = theatre);

    this.route.params.subscribe();

  }

  onEditTheatre() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteTheatre() {
    this.theatreService.deleteTheatre(this.theatres.theatres);
    this.router.navigate(['/theatres']);
  }

}
