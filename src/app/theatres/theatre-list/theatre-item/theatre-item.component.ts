import {Component, Input, OnInit} from '@angular/core';
import {Theatre} from '../../theatre.model';
import {TheatreService} from '../../theatre.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-theatre-item',
  templateUrl: './theatre-item.component.html',
  styleUrls: ['./theatre-item.component.css']
})
export class TheatreItemComponent implements OnInit {
  @Input() theatres: Theatre;

  constructor(private theatreService: TheatreService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate([this.theatres.theatres.toLowerCase()], {relativeTo: this.route});
    this.theatreService.changeTheatre(this.theatres);
  }

}
