import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminservicesService } from '../adminservices.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  title = 'auth-groups-demo';

  access_token: string = "";
  error: string = "";
  error_description: string = "";

  role = "";
  constructor(private router: Router, private route: ActivatedRoute, private restService: AdminservicesService) {

    this.route.queryParams.subscribe(params => {
      this.access_token = params['access_token'];
      this.error = params['error'];
      this.error_description = params['error_description'];

      (async () => {
        if (this.access_token) {

          const token_info = JSON.parse(atob(this.access_token.split(".")[1]))
          this.role = JSON.stringify(token_info.groups, null, 4);
        }


      })()
    });
  }


  ngOnInit(): void {

  }



}
