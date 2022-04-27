import { routerNames } from "../../routers"


export const navbarItems=[
    {
        id:1,
        link:'Тест на профессию',
        path:routerNames.tests
    },
    {
        id:2,
        link:"Акции",
        path:routerNames.aksiya
    },
    {
        id:3,
        link:"Отзывы",
        path:routerNames.reviews
    }
]

export const categories=[
    {
        id:1,
        text:"Программирование",
        path:"/kurs/:programmirovanie"
    },
    {
        id:2,
        text:"Управление",
        path:"/kurs/:upravlenie"
    },
    {
        id:3,
        text:"Дизайн",
        path:"/kurs/:dizayn"
    },
    {
        id:4,
        text:"Маркетинг",
        path:"/kurs/:marketing"
    }
]
