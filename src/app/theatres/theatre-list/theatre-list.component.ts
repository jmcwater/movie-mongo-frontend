import {Component, OnDestroy, OnInit} from '@angular/core';
import {TheatreService} from '../theatre.service';
import {Theatre} from '../theatre.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.css']
})
export class TheatreListComponent implements OnInit, OnDestroy {
  theatres: Theatre[];

  constructor(private theatreService: TheatreService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.theatreService.getTheatres()
      .then(theatres => this.theatres = theatres)
      .catch(error => console.log(error));
  }

  onNewTheatre() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
