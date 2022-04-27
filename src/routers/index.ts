import { AksiyaPage } from '../pages/aksiya/index';
import { HomePage } from './../pages/home-page/index';
import { Reviews } from './../pages/Reviews/index';
import { Tests } from './../pages/Tests/index';

export enum routerNames{
    home="/",
    reviews="/reviews",
    tests="/tests",
    aksiya="/aksiya"
}

export const routers=[
    {
        id:1,
        path:routerNames.home,
        com:HomePage,
        exact:true
    },
    {
        id:2,
        path:routerNames.aksiya,
        com:AksiyaPage,
        exact:true
    },
    {
        id:3,
        path:routerNames.reviews,
        com:Reviews,
        exact:true
    },
    {
        id:4,
        path:routerNames.tests,
        com:Tests,
        exact:true
    }
]