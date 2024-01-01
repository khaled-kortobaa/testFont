import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  classShared = new BehaviorSubject<String>('font1');
  classSharedObs = this.classShared.asObservable();
}
