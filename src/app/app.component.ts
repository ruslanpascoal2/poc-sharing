import { Component } from '@angular/core';
import { _mock } from 'mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-sharing';
  data = _mock;
}
