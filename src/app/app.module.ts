import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { HotelService } from './services/hotel.service';

//Modules
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelsComponent,
    HotelComponent,
    SearcherComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
