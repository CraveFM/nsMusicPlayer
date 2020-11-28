import { SegmentedBar, SegmentedBarItem } from "@nativescript/core/ui/segmented-bar";
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { TabView } from "@nativescript/core/ui/tab-view";
import { Page } from '@nativescript/core/ui/page';
import { ObservableArray } from "@nativescript/core/data/observable-array";
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode } from "nativescript-ui-listview";
import { GridLayout } from "@nativescript/core/ui/layouts/grid-layout";
@Component({
    selector: "player",
    moduleId: module.id,
    templateUrl: "./player.component.html",
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

    @ViewChild('bg', {static: false}) gridlayout: ElementRef;

    constructor(private router: RouterExtensions, private page: Page) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
    ngAfterViewInit() {
    }

    goBack() {
        this.router.back();
    }

    // TODO -- implement https://github.com/Especializa/nativescript-ng-shadow
    blurImg() {
        console.log('Nothing to see here');
    }
}

















