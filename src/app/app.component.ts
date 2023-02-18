import { ViewportScroller } from '@angular/common';
import { Component, HostListener} from '@angular/core';
import { loadFull } from 'tsparticles';
import { ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Mubeen-portfolio';

  id = "tsparticles";
  theme: string = '';
  scrollPosition: number = 0;
  isScroll: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
    
    if (this.scrollPosition < 50) {
      this.isScroll = true;
    }
    else {
      this.isScroll = false;
    }
  }
  
  constructor(private app: AppService, private view: ViewportScroller){
    this.app.getThemeStyle().subscribe(el=>{
      this.theme = el
    })
  }

  toTop(){
    this.view.scrollToPosition([0,0])    
  }
}