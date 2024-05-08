import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { BlogComponent } from './component/blog/blog.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"about", component:AboutUsComponent},
    {path:"contact", component:ContactUsComponent},
    {path:"blog", component:BlogComponent}
];
