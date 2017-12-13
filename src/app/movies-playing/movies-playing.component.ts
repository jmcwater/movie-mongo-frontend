import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePlaying} from '../shared/datePlaying.model';
import {Subscription} from 'rxjs/Subscription';
import {MoviesPlayingService} from './movies-playing.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movies-playing',
  templateUrl: './movies-playing.component.html',
  styleUrls: ['./movies-playing.component.css']
})
export class MoviesPlayingComponent implements OnInit {
  // public datePlaying: DatePlaying[];

  constructor(
    // private moviesPlayingService: MoviesPlayingService,
    //           private router: Router,
    //           private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    //   this.moviesPlayingService.getDatesPlaying()
    //     .then(moviesPlaying => this.datePlaying = moviesPlaying)
    //     .catch(error => console.log(error));
    // }
  }
}
