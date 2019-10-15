import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent} from './components/hotels/hotels.component';
import { SearcherComponent } from './components/searcher/searcher.component';


const APP_ROUTES: Routes = [
    {path : 'hotels' , component: HotelsComponent },
    {path : 'search/:name' , component: SearcherComponent },
    {path : 'search/:name/:stars' , component: SearcherComponent },
    {path : '**' , pathMatch:'full' , redirectTo:'hotels'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , {useHash: true});