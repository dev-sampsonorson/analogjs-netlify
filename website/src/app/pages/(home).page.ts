import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'website-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <website-analog-welcome/>
  `,
})
export default class HomeComponent {
}
