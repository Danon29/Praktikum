import Handlebars from 'handlebars';
import * as Components from './components'
import * as Pages from './pages';
import './style.css'

// import cat1 from './assets/01.jpg'
// import cat2 from './assets/02.jpg'
// import cat3 from './assets/03.jpg'

const pages = {
    'login': [ Pages.LoginPage, {
        title: 'Вход',
        inputs: [
            {
                label: "Логин",
            },
            {
                label: "Пароль",
                type: "password",
            }],
        buttons: [
            {
                label: "Авторизоваться",
                type: "primary",
            },
            {
                label: "Нет аккаунта?",
                type: "link"
            }
        ]
    } ],
    'test': [ Pages.TestPage, {
        menuList: [{
            label: "Фото или видео",
            src: '/public/icons/Union.svg'
        },
            {
                label: "Файл",
                src: '/public/icons/file.svg'
            },
            {
                label: "Локация",
                src: '/public/icons/location.svg'
            }]
    } ],
    // 'list': [ Pages.ListPage, {
    //     cats: [
    //         {name: 'cat-1', avatar: cat1},
    //         {name: 'cat-2', avatar: cat2, active: true},
    //         {name: 'cat-3', avatar: cat3},
    //     ],
    //     showDialog: true
    // }],
    'nav': [ Pages.NavigatePage ],
    'register': [ Pages.RegisterPage, {
        title: 'Регистрация',
        inputs: [
            {
                label: "Почта",
                type: "email",
            },
            {
                label: "Логин",
            },
            {
                label: "Имя",
            },
            {
                label: "Фамилия",
            },
            {
                label: "Телефон",
                type: "tel",
            },
            {
                label: "Пароль",
                type: "password",
            },
            {
                label: "Пароль (еще раз)",
                type: "password",
            }],
        buttons: [
            {
                label: "Зарегистрироваться",
                type: "primary",
            },
            {
                label: "Войти",
                type: "link"
            }
        ]
    } ],
};

Handlebars.registerHelper("eq", function (a, b) {
    return a === b
})

Handlebars.registerHelper("contains", function (a, b) {
    return typeof a === 'string' && a.includes(b);
})

Object.entries(Components).forEach(([ name, template ]) => {
    Handlebars.registerPartial(name, template);
});

function navigate(page: string) {
    //@ts-ignore
    const [ source, context ] = pages[page];
    const container = document.getElementById('app')!;

    const temlpatingFunction = Handlebars.compile(source);
    console.log('html', temlpatingFunction(context))
    container.innerHTML = temlpatingFunction(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
    //@ts-ignore
    const page = e.target.getAttribute('page');
    if (page) {
        navigate(page);

        e.preventDefault();
        e.stopImmediatePropagation();
    }
});


