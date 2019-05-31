import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ROUTES, CONFIG } from './sidebar-routes.config';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    public menuItems: object;
    public config: object;
    public header: String;
    public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches)
    );

    constructor(private breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        this.menuItems = ROUTES;
        this.config = CONFIG;
    }

    selectedItem(event: any) {
        if (null != event.link) {
            this.header = event.label;
        }
    }

    selectedLabel(event: any) {
        if (null != event.link) {
            this.header = event.label;
        }
    }
}

