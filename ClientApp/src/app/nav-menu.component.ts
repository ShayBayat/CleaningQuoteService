
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/quote">Get a Quote</a>
    </nav>
  `,
  styles: []
})
export class NavMenuComponent {}
