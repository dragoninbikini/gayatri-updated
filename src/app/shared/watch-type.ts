
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchTypeService {
  private watchTypeSubject = new BehaviorSubject<string>('All');
  watchType$ = this.watchTypeSubject.asObservable();

  setWatchType(type: string) {
    this.watchTypeSubject.next(type);
  }
}
