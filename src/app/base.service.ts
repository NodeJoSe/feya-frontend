import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GlobalState } from "./global.state";


export abstract class HttpBaseService {
  protected readonly TAG = HttpBaseService.name;
  protected state: GlobalState;

  protected extractData(res: Response) {
    console.log(`${this.TAG}:extractData:`, res.json());
    const data = res.json() || [];
    return data;
  }

  protected handleErrors(error: Response) {
    console.error(`${this.TAG}:extractData:`, error);
    if (error.status === 401 || error.status === 403) {
      this.state.notifyDataChanged('logout', error);
    }
    return Observable.throw(error.json());
  }

}
