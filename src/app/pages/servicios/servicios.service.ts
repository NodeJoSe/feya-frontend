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
export class ServiciosService extends HttpBaseService {
  protected readonly TAG = ServiciosService.name;
  SERVICIOS_URL = '/ministry/service/?depth=1';

  constructor(
    protected state: GlobalState,
    private http: Http,
    private auth: AuthService,
    private localStorage: LocalStorageService,
  ) {
    super();
  }

  servicios(page: number) {
    const url = this.SERVICIOS_URL;
    const token = this.auth.getToken();
    const headers = new Headers();

    return this.http
      .get(`${Constants.API_URL}${url}&page=${page}`, { headers })
      .catch((e, c) => this.handleErrors(e))
      .map((res) => this.extractData(res));
  }
}
