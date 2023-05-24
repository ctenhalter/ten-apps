import { Component } from '@angular/core';

@Component({
  selector: 'guru-main-layout',
  template: `
    <p>
      <mat-toolbar color="primary">
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with menu icon"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <span>My App</span>
        <span class="example-spacer"></span>
        <!-- <button
          mat-icon-button
          class="example-icon favorite-icon"
          aria-label="Example icon-button with heart icon"
        >
          <mat-icon>favorite</mat-icon>
        </button>
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with share icon"
        >
          <mat-icon>share</mat-icon>
        </button> -->
      </mat-toolbar>
    </p>
  `,
  styles: [],
})
export class MainLayoutComponent {}
