import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoComponent } from './profile/posts/photo/photo.component';
import { VideoComponent } from './profile/posts/video/video.component';
import { TaggedComponent } from './profile/posts/tagged/tagged.component';
import { FollowersComponent } from './profile/followers/followers.component';
import { FollowingComponent } from './profile/following/following.component';

const routes: Routes = [
  {path: '' , component: PhotoComponent, pathMatch: 'full'},
  {path: 'video' , component: VideoComponent, pathMatch: 'full'},
  {path: 'tagged' , component: TaggedComponent, pathMatch: 'full'},
  {path: 'followers' , component: FollowersComponent, pathMatch: 'full'},
  {path: 'following' , component: FollowingComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
