import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    template: `<h2>Hello {{ Name }}</h2>`
})

export class HeroComponent {
    Name: 'Component';
}