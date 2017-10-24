import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Constants } from '../../app.constants';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { AuthService } from 'ng2-ui-auth';
import { HttpBaseService } from "../../base.service";
import { GlobalState } from '../../global.state';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable()
export class ContactoService extends HttpBaseService {
  protected readonly TAG = ContactoService.name;
  CONTACTO_URL = '/ministry/datecontact/';

  constructor(
    protected state: GlobalState,
    private http: Http,
    private auth: AuthService,
    private localStorage: LocalStorageService,
  ) {
    super();
  }

  contacto() {
    const url = this.CONTACTO_URL;
    const token = this.auth.getToken();
    const headers = new Headers();

    return this.http
      .get(`${Constants.API_URL}${url}`, { headers })
      .catch((e, c) => this.handleErrors(e))
      .map((res) => this.extractData(res));
  }
}
