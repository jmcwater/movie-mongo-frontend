import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Movie} from '../../movie.model';

import {MovieService} from '../../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate([this.movie.title.toLowerCase()], {relativeTo: this.route});
    this.movieService.changeMovie(this.movie);
  }

}
