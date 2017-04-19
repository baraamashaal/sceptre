import { Injectable } from '@angular/core';
import { Http, Request, BaseRequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

  constructor(private _http: Http) {

  }


  private _requestResolver(): Observable<Response> {

  }
}


export class baseRequestOptions extends BaseRequestOptions