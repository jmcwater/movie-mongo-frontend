import {Component, Input, OnInit} from '@angular/core';
import {DatePlaying} from '../../../shared/datePlaying.model';
import {MoviesPlayingService} from '../../movies-playing.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() datePlaying: DatePlaying;

  constructor(private moviesPlayingService: MoviesPlayingService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.moviesPlayingService.deleteDatePlaying(this.datePlaying.datePlaying);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
