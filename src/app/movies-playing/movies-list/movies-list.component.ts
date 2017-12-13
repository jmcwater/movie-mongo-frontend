import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePlaying} from '../../shared/datePlaying.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesPlayingService} from '../movies-playing.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  datesPlaying: DatePlaying[];

  constructor(private moviesPlayingService: MoviesPlayingService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.moviesPlayingService.getDatesPlaying()
      .then(moviesPlaying => this.datesPlaying = moviesPlaying)
      .catch(error => console.log(error));
  }

  onNewDatePlaying() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {

  }
}
