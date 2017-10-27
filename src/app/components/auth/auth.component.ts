import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.auth.accessToken = params.access_token;
      this.auth.refreshToken = params.refresh_token;
      localStorage.setItem('access_token', params.access_token);
      localStorage.setItem('refresh_token', params.refresh_token);
      this.router.navigateByUrl('/generator');
    })

  }

}

