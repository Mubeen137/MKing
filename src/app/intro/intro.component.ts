import { Component, OnInit } from '@angular/core';
import { loadFull } from 'tsparticles';
import { ClickMode, HoverMode, MoveDirection, OutMode, Container, Engine } from 'tsparticles-engine';
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
  id = "tsparticles";

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

  
  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 3
        },
        repulse: {
          distance: 100,
          duration: 1
        }
      }
    },
    particles: {
      color: {
        value: this.isDark ? '#ffffff' : "#000000"
      },
      links: {
        color: this.isDark? '#ffffff' : "#000000",
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 200
        },
        value: 3
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    // console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    // console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
