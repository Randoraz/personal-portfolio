import { Component, ElementRef, ViewChild } from '@angular/core';
import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  @ViewChild('languagesUl') languagesUl!: ElementRef<HTMLUListElement>;
  // @ViewChild('educationUl') educationUl!: ElementRef<HTMLUListElement>;

  languagesIsShowing: boolean = false;
  // educationIsShowing: boolean = false;

  anglesDown: string = icon(faAnglesDown).html[0];
  anglesUp: string = icon(faAnglesUp).html[0];

  handleShow(event: Event, ulElement: HTMLUListElement) {
    const button = event.target as HTMLButtonElement;
    if(this.languagesIsShowing) {
      ulElement.style.maxHeight = '0';
      ulElement.style.marginTop = '0';
      button.innerHTML = `${this.anglesDown} See more`;
      this.languagesIsShowing = false;
    } else {
      ulElement.style.maxHeight = '30rem';
      ulElement.style.marginTop = '1rem';
      button.innerHTML = `${this.anglesUp} See less`;
      this.languagesIsShowing = true;
    }
  }
}
