import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CertificateList } from '../certificate-list';
import {  icon, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent {
  @Input() certificateList: CertificateList = {
    name: '',
    certificates: []
  };

  @ViewChild('list') list!: ElementRef<HTMLUListElement>;
  @ViewChild('arrowIcon') arrowIcon!: FaIconComponent;

  anglesDown: string = icon(faAnglesDown).html[0];
  anglesUp: string = icon(faAnglesUp).html[0];
  currentIcon: [IconPrefix, IconName] = ['fas', 'angles-down'];

  buttonMessage: string = `See more`;
  isShowing = false;

  handleClick() {
    if(this.isShowing) {
      this.list.nativeElement.style.maxHeight = '0';
      this.list.nativeElement.style.marginTop = '0';
      this.buttonMessage = 'See more';
      this.currentIcon = ['fas', 'angles-down'];
      this.isShowing = false;
    } else {
      this.list.nativeElement.style.maxHeight = '100rem';
      this.list.nativeElement.style.marginTop = '1rem';
      this.buttonMessage = 'See less';
      this.currentIcon = ['fas', 'angles-up'];
      this.isShowing = true;
    }    
  }
}
