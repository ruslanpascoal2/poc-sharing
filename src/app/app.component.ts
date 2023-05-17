import { Component } from '@angular/core';
import { _mock } from 'mock';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-sharing';
  data = _mock;
  constructor(private meta: Meta) { }

  onShareClick(item: any){
    this.meta.updateTag({ name: 'og:image', content: item.image });
  }
}
