import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './profile/posts/posts.component';
import { VideoComponent } from './profile/posts/video/video.component';
import { TaggedComponent } from './profile/posts/tagged/tagged.component';
import { PhotoComponent } from './profile/posts/photo/photo.component';
import { NavigationComponent } from './profile/posts/navigation/navigation.component';
import { FollowersComponent } from './profile/followers/followers.component';
import { FollowingComponent } from './profile/following/following.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    PostsComponent,
    VideoComponent,
    TaggedComponent,
    PhotoComponent,
    NavigationComponent,
    FollowersComponent,
    FollowingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
