import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class PageNewsComponent implements OnInit {
    private topStoriesIds: any[] = [];
    private currentPage = 1;
    private storiesPerPage = 20;
    public stories: any[] = [];
    private nextStories: any[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }
}
