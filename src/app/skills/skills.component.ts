import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skill') skill: any;
  @ViewChild('project') project: any;

  skillList: any = [
    { logo: 'assets/img/skills/html.jpg', percent: '95%', name: 'HTML5' },
    { logo: 'assets/img/skills/css.png', percent: '95%', name: 'CSS3' },
    { logo: 'assets/img/skills/javascript.svg', percent: '80%', name: 'JavaScript' },
    { logo: 'assets/img/skills/typescript.png', percent: '90%', name: 'TypeScript' },
    { logo: 'assets/img/skills/angular.png', percent: '95%', name: 'Angular' },
    { logo: 'assets/img/skills/node.png', percent: '70%', name: 'NodeJs' },
    { logo: 'assets/img/skills/phyton.png', percent: '40%', name: 'Phyton' },
    { logo: 'assets/img/skills/mysql.png', percent: '30%', name: 'MySql' },
    { logo: 'assets/img/skills/mongodb.png', percent: '30%', name: 'MongoDB' },
    { logo: 'assets/img/skills/rxjs.png', percent: '30%', name: 'RxJs' },
    { logo: 'assets/img/skills/ngrx.svg', percent: '30%', name: 'NgRx' },
  ];

  projects: any = [
    { image: 'assets/img/projects/project1.png', name: 'NDA Application', detail: 'Description of Project 1' },
    { image: 'assets/img/projects/project1.png', name: 'Procurment and Contract Management System', detail: 'Description of Project 2' },
    { image: 'assets/img/projects/project1.png', name: 'Teamlend', detail: 'Description of Project 3' },
    { image: 'assets/img/projects/project1.png', name: 'Swipe', detail: 'Description of Project 4' },
    { image: 'assets/img/projects/project1.png', name: 'Product Catalogue', detail: 'Description of Project 5' },
    { image: 'assets/img/projects/project1.png', name: 'CABSOL', detail: 'Description of Project 6' },
  ];

  constructor(private app: AppService) {
    this.scrollToSection()
  }

  scrollToSection() {
    this.app.getScrollPosition()
      .subscribe(el => {
        if (el == 'skill') {
          this.scroll(this.skill)
        } else if (el == 'project') {
          this.scroll(this.project)
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
    let sk = this.skill.nativeElement.offsetTop
    let pr = this.project.nativeElement.offsetTop

    this.app.addScrollPosition(sk, 'skill')
    this.app.addScrollPosition(pr, 'project')
  }

}
