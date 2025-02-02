import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  isSidebarVisible = signal(false)
  constructor() { }
}
