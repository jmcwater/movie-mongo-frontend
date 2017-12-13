import { Component, OnInit } from '@angular/core';
import {DatePlaying} from '../../shared/datePlaying.model';
import {MoviesPlayingService} from '../movies-playing.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  id: number;
  datePlaying: DatePlaying;

  constructor(private moviesPlayingService: MoviesPlayingService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.moviesPlayingService.currentMoviePlaying.subscribe(moviePlaying => this.datePlaying = moviePlaying);

    this.route.params.subscribe();

  }

  onEditDatePlaying() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteDatePlaying() {
    this.moviesPlayingService.deleteDatePlaying(this.datePlaying.datePlaying);
    this.router.navigate(['/movies-playing']);
  }

}
