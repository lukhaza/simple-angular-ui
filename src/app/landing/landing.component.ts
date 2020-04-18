import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  jwt;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    // private service: HeroService
  ) { }

  ngOnInit(): void {
    this.jwt = this.route.snapshot.paramMap.get('jwt');
    this.authService.setSession(this.jwt);

    // this.jwt = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => params.get('jwt'))
    // );

  }

}
