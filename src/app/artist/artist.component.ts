import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ScrollView, ScrollEventData } from '@nativescript/core/ui/scroll-view';
import { Image } from '@nativescript/core/ui/image';
import { Screen, isIOS } from "@nativescript/core/platform";
import { View } from '@nativescript/core/ui/core/view';
import { Page } from "@nativescript/core/ui/page";
import { EventData } from "@nativescript/core/data/observable";
import { topmost } from "@nativescript/core/ui/frame";
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: "Artist",
    moduleId: module.id,
    templateUrl: "./artist.component.html",
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    public headerHeight = 200;
    public stretchyHeight = this.headerHeight;

    constructor(private _page: Page, private router: RouterExtensions) {
        this._page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // let navigationBar = topmost().ios.controller.navigationBar;
        // navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }

    goBack() {
        this.router.back();
    }
    goToPlayer() {
        this.router.navigate(["player"]);
    }

    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
        let parallaxSpeed = 0.33;
        const offset = scrollView.verticalOffset * parallaxSpeed * -1;
        if (scrollView.ios) {
            if (scrollView.verticalOffset < 0) {
                topView.translateY = Math.floor(0);
                this.stretchyHeight = this.headerHeight - scrollView.verticalOffset;
            } else {
                this.stretchyHeight = this.headerHeight;
                topView.translateY = Math.floor(offset);
            }
        }

        if (scrollView.android) {
            if (scrollView.verticalOffset < 0) {
                topView.translateY = Math.floor(0);
            } else {
                topView.translateY = Math.floor(offset);
            }
        }

    }
}
