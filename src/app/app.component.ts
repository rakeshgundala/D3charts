import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'D3.js with Angular!';

    examples = [
        {
            title: 'Tree Map',
            route: '/tree-map'
        },
        {
            title: 'Bar Chart',
            route: '/bar-chart'
        },
        {
            title: 'Stacked Bar Chart',
            route: '/stacked-bar-chart'
        },
        {
            title: 'Brush Zoom',
            route: '/brush-zoom'
        },
        {
            title: 'Buble Chart',
            route: '/bubule-chart'
        },
        {
            title: 'Donut chart',
            route: '/donut-chart'
        },
    ];

}
