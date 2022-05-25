import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AdminservicesService {
  private base_url = 'https://acgworld-accounts-api.skill-mine.com';
  constructor(
    private httpClient: HttpClient) {

  }


  async getUserInfo(access_token: string): Promise<any> {
    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    };
    const header_options = {
      headers: new HttpHeaders(headers),
      responceType: 'json',
    };
    return this.httpClient
      .post(`${this.base_url}/users-srv/userinfo`, {}, header_options)
      .toPromise();
  }

}
