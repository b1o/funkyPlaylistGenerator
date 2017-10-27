import { FormsModule } from '@angular/forms';
import { GeneratorService } from './services/generator.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app.routing';
import { MusicService } from './services/music.service';
import { NetworkService } from './services/network.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { MDBBootstrapModules, MDBSpinningPreloader } from 'ng-mdb-pro';
import { MusicSearchComponent } from './components/music-search/music-search.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { AuthComponent } from './components/auth/auth.component';
import { AudioComponent } from './components/audio/audio.component';
import { GeneratorComponent } from './components/generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicSearchComponent,
    MusicCardComponent,
    AuthComponent,
    AudioComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModules.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MDBSpinningPreloader,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    NetworkService,
    MusicService,
    AuthService,
    GeneratorService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
