import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {PageNewsComponent} from './pages/news/news.component';
import {PageNotFoundComponent} from './pages/not-found/not-found.component';
import {PageAboutComponent} from './pages/about/page-about.component';
import {PageFavouriteComponent} from './pages/favourite/page-favourite.component';
import {HttpClientModule} from '@angular/common/http';
import {MsToHumanReadableTimePipe} from './pipes/ms-to-human-readable-time.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PageNewsComponent,
        PageNotFoundComponent,
        PageAboutComponent,
        PageFavouriteComponent,
        MsToHumanReadableTimePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
