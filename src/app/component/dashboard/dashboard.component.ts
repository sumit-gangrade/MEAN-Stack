import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  _userId: any;
  userDetails: any;
  constructor(private route: ActivatedRoute, private service: LoginService) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this._userId = param.id;
    });
  }

  async getUser() {
    // get User Details
    await this.service.getUser(this._userId).subscribe((user) => {
      console.log('User Details', user);
    });
  }

}
