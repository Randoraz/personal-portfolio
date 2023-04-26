import { Component } from '@angular/core';
import { CertificateList } from '../certificate-list';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  educationCertificateList: CertificateList = {
    name: 'Education',
    certificates: [
      {
        name: 'Front-End Engineer Career Path by Codecademy',
        info: '(Online - 2023)'
      },
      {
        name: 'Typescript Course by Codecademy',
        info: '(Online - 2023)'
      },
      {
        name: 'Javascript Course by Codecademy',
        info: '(Online - 2023)'
      },
      {
        name: 'Responsive Web Design Certification by FreeCodeCamp',
        info: '(Online - 2022)'
      }
    ] 
  }

  languageCertificateList: CertificateList = {
    name: 'Language',
    certificates: [
      {
        name: 'Dutch Course Level B1 at PCVO Modern Talen Hasselt',
        info: '(Belgium - 2023)'
      },
      {
        name: 'N2 Japanese Course at ISI Language School',
        info: '(Japan - 2021)'
      },
      {
        name: 'Perfect Attendence for 1 year at ISI Language School',
        info: '(Japan - 2021)'
      },
      {
        name: 'Intermediate Japanese Course at Poliglota Institute',
        info: '(Brazil - 2019)'
      },
      {
        name: 'Basic German Course at Poliglota Institute',
        info: '(Brazil - 2018)'
      },
      {
        name: 'onSET-Zertifikat - German CEFR Level B1',
        info: '(Brazil - 2017)'
      },
      {
        name: 'Intermediate English Course at Poliglota Institute',
        info: '(Brazil - 2015)'
      },
    ]
  }
}
