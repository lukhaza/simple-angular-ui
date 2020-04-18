import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { WebServiceService } from '../services/webservice/web-service.service';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  jwt;
  result;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private webservice: WebServiceService,
    // private service: HeroService
  ) { }

  ngOnInit(): void {
    this.jwt = this.route.snapshot.paramMap.get('jwt');
    this.authService.setSession(this.jwt);
    this.result = this.login().subscribe(data => console.log(data));

    // this.jwt = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => params.get('jwt'))
    // );

  }

  private login() {
    return this.webservice.get('auth/protected');
  }

}
