import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class RouterInfoService {

  constructor() { }
  enterOnSubMenu = new Observable((observer) => {
    observer.next();
    observer.complete();
  }
)
}
