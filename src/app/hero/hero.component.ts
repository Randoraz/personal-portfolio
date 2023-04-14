import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  portraitSrc: string = 'assets/images/Raquel Portrait 1280x1280 - Assinado.jpg';

  onMouseEnterImg() {
    this.portraitSrc = 'assets/images/Raquel Portrait - Winkle_1280x1280 - Assinado.png';
  }

  onMouseLeaveImg() {
    this.portraitSrc = 'assets/images/Raquel Portrait 1280x1280 - Assinado.jpg';
  }
}
