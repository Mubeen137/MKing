import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { map } from 'rxjs';
import { AppService } from '../app.service';
import { getCurrentTimePeriod } from '../helpers/time-period';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  toggleControl = new UntypedFormControl(false);

  checktime: number = 0;
  theme: boolean = false;
  scrollPosition: number = 0;
  isScroll: boolean = true;
  scrollTo: string = '';
  scrollNumber: any;
  scrollArray: any = [];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
    if (this.scrollPosition < 50) {
      this.isScroll = true;
    }
    else {
      this.isScroll = false;
    }
    this.scrollTo = ''

    for (let i = 0; i < this.scrollArray.length; i++) {
      if (this.scrollPosition > this.scrollArray[i].scroll) {
        this.scrollTo = this.scrollArray[i].name
      }
    }
  }

  constructor(private app: AppService) {
    this.app.getThemeStyle().subscribe((el: string) => {
      this.theme = el == 'dark-theme' ? true : false
    })

    this.app.getScrollPosition().subscribe((el: string) => {
      this.scrollTo = el
    })

    this.app.getScrollNumber().subscribe((el: string) => {
      this.scrollArray = el
    })
  }

  ngOnInit(): void {
  }

  scrollToSection(val: string) {
    this.app.setScrollPosition(val)
  }

  changeTheme(val: any) {
    val ? this.app.changeTheme('dark-theme') : this.app.changeTheme('light-theme')
  }
}
