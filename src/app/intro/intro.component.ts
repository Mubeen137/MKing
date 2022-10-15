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
  }

}
