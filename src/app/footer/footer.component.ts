import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('contact') footer: any;

  socialLinks: any = [
    {icon: 'assets/img/social/fb.png', color: '#1872e9', handle: 'Abdulhameed Mubeen'},
    {icon: 'assets/img/social/in.png', color: '#b72c8f', handle: 'Abdulhameed Mubeen'},
    {icon: 'assets/img/social/lk.png', color: '#1144ce', handle: 'Abdulhameed Mubeen'},
    {icon: 'assets/img/social/wt.png', color: '#33a524', handle: 'Mking137'},
    {icon: 'assets/img/social/wt.png', color: '#33a524', handle: 'Mking137'},
    {icon: 'assets/img/social/twt.png', color: '#33a524', handle: '@Mubeen137'},
  ]

  constructor(private app: AppService) {
    this.scrollToSection()
  }

  scrollToSection() {
    this.app.getScrollPosition()
      .subscribe(el => {
        if (el == 'contact') {
          this.scroll(this.footer)
        }
      })
  }

  scroll(val: any) {
    val.nativeElement.scrollIntoView({ behavior: 'smooth' })
    // window.scrollTo(0, val.nativeElement.scrollHeight + 600)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let ft = this.footer.nativeElement.offsetTop

    this.app.addScrollPosition(ft, 'contact')
  }


  animate(element: HTMLElement){
    // const ELEMENTS = document.querySelectorAll(".social");
    let ELEMENTS_SPAN: any;

    ELEMENTS_SPAN = element.querySelector("span");

    element.addEventListener("mouseover", (e: any) => {
      ELEMENTS_SPAN.style.left = e.pageX - element.offsetLeft + "px";
      ELEMENTS_SPAN.style.top = e.pageY - element.offsetTop + "px";

      // Add an animation-class to animate via CSS.
      // if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
    });

    element.addEventListener("mouseout", (e: any) => {
      ELEMENTS_SPAN.style.left = e.pageX - element.offsetLeft + "px";
      ELEMENTS_SPAN.style.top = e.pageY - element.offsetTop + "px";
    });
  }
}
