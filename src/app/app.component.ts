import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab-dental-creative';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const platform = isPlatformBrowser(this.platformId) ? 'browser' : 'server';
    console.log("I'm in the", platform);
  }
}
