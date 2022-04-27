import dir1 from '../images/direction1.svg'
import dir2 from '../images/direction2.svg'
import dir3 from '../images/direction3.svg'
import dir4 from '../images/direction4.svg'
import dir5 from '../images/direction5.svg'
import dir6 from '../images/direction6.svg'

import logo from '../images/school/image.png'
import logo2 from '../images/school/image1.png'
import logo3 from '../images/school/image3.png'
import logo4 from '../images/school/image2.png'

import python from '../images/school/python.png'

import blog from '../images/blog_python.png'

export const courseDirections=[
    {
       id:1,
       logo:dir1,
       text:"Программирование",
       title:"300 курсов",
       path:"/kurs/:programmirovanie"
    },
    {
        id:2,
        logo:dir2,
        text:"Управление",
        title:"300 курсов",
        path:"/kurs/:upravlenie"
    },
    {
        id:3,
        logo:dir3,
        text:"Дизайн",
        title:"300 курсов",
        path:"/kurs/:dizayn"
    },
    {
        id:4,
        logo:dir4,
        text:"Маркетинг",
        title:"300 курсов",
        path:"/kurs/:marketing"
    },
    {
        id:5,
        logo:dir5,
        text:"Аналитика",
        title:"300 курсов",
        path:"/kurs/analitik"
    },
    {
        id:6,
        logo:dir6,
        text:"Создание контента",
        title:"300 курсов",
        path:"/kurs/:create-content"
    },
]

export const topSchool=[
    {
       id:1,
       logo,
    },
    {
        id:2,
        logo:logo2
    },
    {
        id:3,
        logo:logo3
    },
    {
        id:4,
        logo:logo4
    },
    {
       id:5,
       logo,
    },
    {
        id:6,
        logo:logo2
    },
    {
        id:7,
        logo:logo3
    },
    {
        id:8,
        logo:logo4
    },
    {
       id:9,
       logo,
    },
    {
        id:10,
        logo:logo2
    },
    {
        id:11,
        logo:logo3
    },
    {
        id:12,
        logo:logo4
    }
]

export const kurss=[
    {
        id:1,
        name:"Веб-разработчик",
        rating:4.9,
        count:122,
        start:"17.08.2021",
        duration:"8 месяцев",
        lesson_count:"2-3",
        format:"Формат: онлайн-лекции, домашние задания с фидбеком от преподавателей",
        peculiarity:"Особенности: постоянная практика, актуальная программа обучения, чат с одногруппниками. После обучение все студенты проходят стажировку",
        price:"17 150",
        one_price:"От 2 777 ₽/мес",
        logo:python,
    },
    {
        id:2,
        name:"Веб-разработчик",
        rating:4.9,
        count:122,
        start:"17.08.2021",
        duration:"8 месяцев",
        lesson_count:"2-3",
        format:"Формат: онлайн-лекции, домашние задания с фидбеком от преподавателей",
        peculiarity:"Особенности: постоянная практика, актуальная программа обучения, чат с одногруппниками. После обучение все студенты проходят стажировку",
        price:"17 150",
        one_price:"От 2 777 ₽/мес",
        logo:python
    },
    {
        id:3,
        name:"Веб-разработчик",
        rating:4.9,
        count:122,
        start:"17.08.2021",
        duration:"8 месяцев",
        lesson_count:"2-3",
        format:"Формат: онлайн-лекции, домашние задания с фидбеком от преподавателей",
        peculiarity:"Особенности: постоянная практика, актуальная программа обучения, чат с одногруппниками. После обучение все студенты проходят стажировку",
        price:"17 150",
        one_price:"От 2 777 ₽/мес",
        logo:python
    }
]


export const blogs=[
    {
        id:1,
        photo:blog,
        text:"Профессия «Python разработчик»",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus",
    },
    {
        id:2,
        photo:blog,
        text:"Профессия «Python разработчик»",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus",
    },
    {
        id:3,
        photo:blog,
        text:"Профессия «Python разработчик»",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus",
    },
    {
        id:4,
        photo:blog,
        text:"Профессия «Python разработчик»",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus",
    },
]