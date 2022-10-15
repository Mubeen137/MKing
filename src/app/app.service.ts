import { HostBinding, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { getCurrentTimePeriod } from "./helpers/time-period";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public themeStyle: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public scrollPosition: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public scrollNumber: BehaviorSubject<any> = new BehaviorSubject<any>('');

  themeType: string = '';
  scrolls: any = [];

  @HostBinding('class') className = '';

  constructor(
  ) {
    this.checkThemeType()
  }

  checkThemeType() {
    this.themeType = localStorage.getItem('theme-type')!
    this.themeType != 'dark-theme' ? document.body.classList.toggle('dark-theme') : ''

    this.changeTheme(this.themeType)
  }

  changeTheme(val: string) {
    localStorage.setItem('theme-type', val)

    document.body.classList.toggle('dark-theme')

    const darkClassName = 'darkMode';
    this.className = val == 'dark-theme' ? darkClassName : '';

    this.themeStyle.next(val)
  }

  getThemeStyle(): Observable<string> {
    return this.themeStyle.asObservable()
  }

  setScrollPosition(type: string) {
    this.scrollPosition.next(type)
  }

  getScrollPosition(): Observable<any> {
    return this.scrollPosition.asObservable()
  }

  addScrollPosition(scroll: number, type: string) {
    this.scrolls.push({ scroll: scroll, name: type })
    this.scrollNumber.next(this.scrolls)
  }

  getScrollNumber(): Observable<any> {
    return this.scrollNumber.asObservable()
  }
}
