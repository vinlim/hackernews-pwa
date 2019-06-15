import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNewsComponent} from './pages/news/news.component';
import {PageNotFoundComponent} from './pages/not-found/not-found.component';
import {PageAboutComponent} from './pages/page-about/page-about.component';
import {PageFavouriteComponent} from './pages/page-favourite/page-favourite.component';

const routes: Routes = [
    {
        path: 'news',
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
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
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
