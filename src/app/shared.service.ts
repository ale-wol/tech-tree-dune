import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private selectedFactionSource = new BehaviorSubject<string>("Corrino");
  selectedFaction$ = this.selectedFactionSource.asObservable();

  constructor() { }

  updateSelectedFaction(faction: string) {
    this.selectedFactionSource.next(faction);
  }
}
