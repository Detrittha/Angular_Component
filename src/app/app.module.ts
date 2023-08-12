import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BlackadamComponent } from './page/blackadam/blackadam.component';
import { BlackpantherComponent } from './page/blackpanther/blackpanther.component';
import { MovieComponent } from './page/movie/movie.component';
import { Routes,RouterModule } from '@angular/router';
import { RobotComponent } from './page/robot/robot.component';
import { MainComponent } from './page/main/main.component';

const appRoutes: Routes =[
  { path:'',component: MovieComponent},
  { path: 'movie',component:MovieComponent,children:[
    { path: 'blackadam',component:BlackadamComponent,outlet :'movieoutlet'},
    { path: 'blackpanther',component:BlackpantherComponent,outlet :'movieoutlet'},
    { path: 'robot',component:RobotComponent,outlet :'movieoutlet'}
  ]},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlackadamComponent,
    BlackpantherComponent,
    MovieComponent,
    RobotComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
