import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  initScroeClassArray(score: number): string[] {
    const scroeClassArray = ['', '', '', '', ''];

    for (let i = 0; i < 5; i++) {
      if (score >= (i * 2)) {
        if (score >= ((i * 2) + 1)) {
          scroeClassArray[i] = 'full-star';
        } else {
          scroeClassArray[i] = 'half-star';
        }
      }
    }
    return scroeClassArray;
  }
}
