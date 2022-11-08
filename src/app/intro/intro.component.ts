import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  logoList: any = [
    'assets/img/logo/attestation-logo.png',
    'assets/img/logo/comsoft.png',
    'assets/img/logo/efcc.png',
    'assets/img/logo/nda.png',
    'assets/img/logo/nirs.png',
    'assets/img/logo/pcm.png',
    'assets/img/logo/swipe.png',
    'assets/img/logo/teamlend.png',
  ]
  isDark: boolean = false;

  constructor(private app: AppService) {
    this.app.getThemeStyle().subscribe(el => {
      this.isDark = el == 'dark-theme' ? true : false
    })
  }

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const slideTop = entry.target.querySelectorAll('.slide-top')!;

        if (entry.isIntersecting) {
          console.log(slideTop, 'check');
          slideTop.forEach((entry) => {
            entry.classList.add('slide-to-top');
          })
          return  // if we added the class, exit the function
        }
        slideTop.forEach((entry) => {
          entry.classList.remove('slide-to-top');
        })
      });

      entries.forEach(entry => {
        const slideLeft = entry.target.querySelectorAll('.slide-in-left')!;

        if (entry.isIntersecting) {
          slideLeft.forEach((entry) => {
            entry.classList.add('slide-left');
          })
          return  // if we added the class, exit the function
        }
        slideLeft.forEach((entry) => {
          entry.classList.remove('slide-left');
        })
      });

      entries.forEach(entry => {
        const slideRight = entry.target.querySelectorAll('.slide-in-right')!;

        if (entry.isIntersecting) {
          slideRight.forEach((entry) => {
            entry.classList.add('slide-right');
          })
          return  // if we added the class, exit the function
        }
        slideRight.forEach((entry) => {
          entry.classList.remove('slide-right');
        })
      });

      entries.forEach(entry => {
        const fade = entry.target.querySelectorAll('.fade')!;

        if (entry.isIntersecting) {
          fade.forEach((entry) => {
            entry.classList.add('fade-in');
          })
          return  // if we added the class, exit the function
        }
        fade.forEach((entry) => {
          entry.classList.remove('fade-in');
        })
      });
    });
    observer.observe(document.querySelector('.intro-wrap')!);
    // observer.observe(document.querySelector('.mid-section')!);

  }

}
