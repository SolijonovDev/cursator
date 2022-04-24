import { HomePage } from './../pages/home-page/index';

export enum EnumRouters{
    home="/",
    blog="/glob"
}

export const routers=[
    {
        id:1,
        path:EnumRouters.home,
        com:HomePage,
        exact:true
    }
]