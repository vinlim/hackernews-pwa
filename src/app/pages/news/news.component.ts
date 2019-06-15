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
        this.initList();
    }

    public async getNext() {
        this.stories = this.stories.concat(this.nextStories);
        this.currentPage = this.currentPage + 1;
        this.nextStories = await this.getStories(this.currentPage + 1);
    }

    private async initList() {
        // tslint:disable-next-line:no-console
        console.time('getList');
        const api = 'https://hacker-news.firebaseio.com/v0/topstories.json';
        this.topStoriesIds = await this.http.get<any[]>(api).toPromise();
        const stories = await this.getStories(this.currentPage);
        this.stories = await this.stories.concat(stories);
        this.nextStories = await this.nextStories.concat(await this.getStories(this.currentPage + 1));
        console.log('next', this.nextStories);
        // tslint:disable-next-line:no-console
        console.timeEnd('getList');
    }

    private async getStories(page: number) {
        // tslint:disable-next-line:no-console
        const index = page === 1 ? 0 : (page - 1) * this.storiesPerPage;
        let stories = this.topStoriesIds.slice(index, index + this.storiesPerPage);

        if (stories) {
            stories = await Promise.all(
                stories.map(async item => {
                    return await this.fetchStory(item);
                })
            );
        }

        return stories;
    }

    private async fetchStory(itemId) {
        const api = `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;
        return await this.http.get(api).toPromise();
    }
}
