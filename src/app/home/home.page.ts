// theme/variables.scss
// https://ionicframework.com/docs/theming/dark-mode
// Commented the css "@media (prefers-color-scheme: dark)" and added https://ionicframework.com/docs/theming/dark-mode#ionic-dark-theme
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  prefersDark: any;
  toggle: any;

  constructor() { }

  ngOnInit(): void {

    // Query for the toggle that is used to change between themes
    this.toggle = document.querySelector('#themeToggle');

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    this.toggle.addEventListener('ionChange', (ev: any) => {
      document.body.classList.toggle('dark', ev.detail.checked);
    });

    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the prefers-color-scheme media query
    this.prefersDark.addListener((e: any) => this.checkToggle(e.matches));
  }

  // Called when the app loads
  loadApp() {
    this.checkToggle(this.prefersDark.matches);
  }

  // Called by the media query to check/uncheck the toggle
  checkToggle(shouldCheck: any) {
    this.toggle.checked = shouldCheck;
  }

}
