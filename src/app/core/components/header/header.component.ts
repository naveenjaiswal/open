import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  scrolled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }

}
