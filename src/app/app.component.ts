import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('header') navBar!: ElementRef<HTMLElement>;
  
  title = 'personal-portfolio';
  
  projects: Project[] = [
    {
      name: 'Reddit Client',
      description: 'A Reddit client that receives posts from the Reddit API ' +
                   'and displays them. The user is able to choose a Subreddit, ' +
                   'search posts with keywords and see comments.',
      img: 'assets/images/Projects/RandorazReddit.png',
      tech: ['React', 'Redux', 'CSS'],
      gitLink: 'https://github.com/Randoraz/randoraz_reddit',
      demoLink: 'https://randorazreddit.netlify.app/'
    },
    {
      name: 'Atatakai Restaurant',
      description: 'A Japanese restaurant website that allows users to check the menu and ' + 
                   'the address, make orders and reservations.',
      img: 'assets/images/Projects/RestaurantApp.png',
      tech: ['React', 'Redux', 'CSS'],
      gitLink: 'https://github.com/Randoraz/RestaurantApp',
      demoLink: 'https://randoraz.github.io/RestaurantApp/'
    },
    {
      name: 'Pathfinding Visualizer',
      description: 'A website that displays with CSS animations how the Dijkstra\'s algorithm finds the shortest ' +
                   'path between the start and end nodes in a grid',
      img: 'assets/images/Projects/PathfindingVisualizer.png',
      tech: ['React', 'CSS'],
      gitLink: 'https://github.com/Randoraz/pathfinding-visualizer',
      demoLink: 'https://randoraz.github.io/pathfinding-visualizer/'
    },
  ];

  hoverOverNameEffect(event: Event) {
    const name: HTMLHeadingElement = event.target as HTMLHeadingElement;
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const originalNameString: string = 'RAQUEL';

    if(name) {
      let iterations: number = 0;

      const interval = setInterval(() => {
        name.innerText = name.innerText.split('').map((letter, index) => {
          if(letter === ' ' || index < iterations)
            return originalNameString[index];
          
          const newLetter: string = letters[Math.floor(Math.random() * 26)];
          return newLetter;
        }).join('');

        if(iterations >= originalNameString.length)
          clearInterval(interval);

        iterations += 1 / 3;
      }, 50);
      
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(window.scrollY) {
      this.navBar.nativeElement.classList.add('header-after-scrolling');
    } else {
      this.navBar.nativeElement.classList.remove('header-after-scrolling');
    }
  }
}
