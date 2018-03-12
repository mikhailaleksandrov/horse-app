import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
  public selectedTab: number = 0;
  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Capture the token  if available
    var tab = this.route.snapshot.queryParams["tab"];
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    if (tab) {
      this.selectedTab = tab;
    }
  }

  ngAfterViewInit(): void {
    if (this.fragment) {
      try {
        console.log(`f: ${this.fragment}`);
        document.querySelector('#' + this.fragment).scrollIntoView();
      } catch (e) { }
    } else {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}