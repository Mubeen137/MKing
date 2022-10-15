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
    { logo: 'assets/img/skills/html.png', percent: '95%', name: 'HTML & CSS' },
    { logo: 'assets/img/skills/html.png', percent: '80%', name: 'JavaScript' },
    { logo: 'assets/img/skills/html.png', percent: '30%', name: 'HTML & CSS' },
    { logo: 'assets/img/skills/html.png', percent: '30%', name: 'HTML & CSS' },
    { logo: 'assets/img/skills/html.png', percent: '30%', name: 'HTML & CSS' },
    { logo: 'assets/img/skills/html.png', percent: '30%', name: 'HTML & CSS' },
  ];

  projects: any = [
    { image: 'assets/img/projects/project1.png', name: 'Project 1', detail: 'Description of Project 1' },
    { image: 'assets/img/projects/project1.png', name: 'Project 2', detail: 'Description of Project 2' },
    { image: 'assets/img/projects/project1.png', name: 'Project 3', detail: 'Description of Project 3' },
    { image: 'assets/img/projects/project1.png', name: 'Project 4', detail: 'Description of Project 4' },
    { image: 'assets/img/projects/project1.png', name: 'Project 5', detail: 'Description of Project 5' },
    { image: 'assets/img/projects/project1.png', name: 'Project 6', detail: 'Description of Project 6' },
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
