import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNewsComponent} from './pages/news/news.component';
import {PageNotFoundComponent} from './pages/not-found/not-found.component';
import {PageAboutComponent} from './pages/about/page-about.component';
import {PageFavouriteComponent} from './pages/favourite/page-favourite.component';

const routes: Routes = [
    {
        path: '',
        component: PageNewsComponent
    },
    {
        path: 'about',
        component: PageAboutComponent
    },
    {
        path: 'favourite',
        component: PageFavouriteComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
