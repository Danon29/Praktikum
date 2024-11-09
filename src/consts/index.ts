import * as Pages from '../pages'

export const pages = {
    'userEditPassword': [Pages.UserPage, {
        hasPageName: false,
        userName: 'Вася',
        userInputs: [
            {
                label: 'Старый пароль',
                type: 'password',
                value: 'someValueforPassword',
                disabled: false
            },
            {
                label: 'Новый пароль',
                type: 'password',
                value: 'someNewValue',
                disabled: false
            },
            {
                label: 'Повторите новый пароль',
                type: 'password',
                value: 'someNewValue',
                disabled: false
            }
        ],
        userProfileButtons: [
            {
                type: 'primary',
                label: 'Сохранить'
            }
        ]
    }],
    'userProfile': [Pages.UserPage, {
        hasPageName: true,
        userName: 'Вася',
        userInputs: [
            {
                label: 'Почта',
                type: 'email',
                value: 'pochta@yandex.ru',
                disabled: true
            },
            {
                label: 'Логин',
                value: 'Vasya',
                disabled: true
            },
            {
                label: 'Имя',
                value: 'Василий',
                disabled: true
            },
            {
                label: 'Фамилия',
                value: 'Иванов',
                disabled: true
            },
            {
                label: 'Имя в чате',
                value: 'Pupkin',
                disabled: true
            },
            {
                label: 'Телефон',
                type: 'tel',
                value: '+7(923)3123311',
                disabled: true
            },
        ],
        userProfileButtons: [
            {
                type: 'link',
                label: 'Изменить данные'
            },
            {
                type: 'link',
                label: 'Изменить пароль'
            },
            {
                type: 'link',
                label: 'Выйти',
                textColor: 'cancel'
            }
        ]
    }],
    'userEdit': [ Pages.UserPage, {
        hasPageName: false,
        userName: 'Вася',
        userInputs: [
            {
                label: 'Почта',
                type: 'email',
                value: 'pochta@yandex.ru',
                disabled: false
            },
            {
                label: 'Логин',
                value: 'Vasya',
                disabled: false
            },
            {
                label: 'Имя',
                value: 'Василий',
                disabled: false
            },
            {
                label: 'Фамилия',
                value: 'Иванов',
                disabled: false
            },
            {
                label: 'Имя в чате',
                value: 'Pupkin',
                disabled: false
            },
            {
                label: 'Телефон',
                type: 'tel',
                value: '+7(923)3123311',
                disabled: false
            },
        ],
        userProfileButtons: [
            {
                type: 'primary',
                label: 'Сохранить'
            }
        ]
    }],
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
    'main': [ Pages.MainPage, {
        userMenuList: [{
            label: "Добавить пользователя",
            src: '/public/icons/plus.svg',
        }, {
            label: "Удалить пользователя",
            src: '/public/icons/x.svg',
        }],
        messageMenuList: [{
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
            }],
        userName: "Вася",
        labelConfirm: "Удалить",
        dialogTitle: "Добавить пользователя",
        showDialog: false,
        chats: [
            {
                name: "John Doe",
                text: "Hello there",
                selected: false,
                count: 10,
                isOwnMessage: true,
                time: "14:25"
            },
            {
                name: "Jane Smith",
                text: "How are you?",
                selected: false,
                count: 2,
                isOwnMessage: false,
                time: "14:30"
            },
            {
                name: "John Doe",
                text: "I'm good, thanks2ыф вафывфasdfa sdafasdыафыв13123!",
                selected: false,
                count: 3,
                isOwnMessage: true,
                time: "14:35"
            },
            {
                name: "Jane Smith",
                text: "Great to hear!",
                selected: false,
                count: 1,
                isOwnMessage: false,
                time: "14:40"
            },{
                name: "Jane Smith",
                text: "How are you?",
                selected: false,
                isOwnMessage: false,
                time: "14:30"
            },
            {
                name: "John Doe",
                text: "I'm good, thanks2ыф вафывфasdfa sdafasdыафыв13123!",
                selected: false,
                isOwnMessage: true,
                time: "14:35"
            },
            {
                name: "Jane Smith",
                text: "How are you?",
                selected: false,
                isOwnMessage: false,
                time: "14:30"
            },
            {
                name: "John Doe",
                text: "I'm good, thanks2ыф вафывфasdfa sdafasdыафыв13123!",
                selected: false,
                isOwnMessage: true,
                time: "14:35"
            },
            {
                name: "Jane Smith",
                text: "How are you?",
                selected: false,
                count: 2,
                isOwnMessage: false,
                time: "14:30"
            },
            {
                name: "John Doe",
                text: "I'm good, thanks2ыф вафывфasdfa sdafasdыафыв13123!",
                selected: false,
                count: 3,
                isOwnMessage: true,
                time: "14:35"
            },
            {
                name: "Jane Smith",
                text: "How are you?",
                selected: false,
                count: 2,
                isOwnMessage: false,
                time: "14:30"
            },
            {
                name: "John Doe",
                text: "I'm good, thanks2ыф вафывфasdfa sdafasdыафыв13123!",
                selected: false,
                isOwnMessage: true,
                time: "14:35"
            },
            {
                name: "Jane Smith",
                text: "How are you?",
                selected: false,
                isOwnMessage: false,
                time: "14:30"
            },
            {
                name: "John Doe",
                text: "I'm good, thanks2ыф вафывфasdfa sdafasdыафыв13123!",
                selected: false,
                count: 3,
                isOwnMessage: true,
                time: "14:35"
            },
            {
                name: "Jane Smith",
                text: "How are you?",
                selected: false,
                count: 2,
                isOwnMessage: false,
                time: "14:30"
            },
            {
                name: "John Doe",
                text: "I'm good, thanks2ыф вафывфasdfa sdafasdыафыв13123!",
                selected: false,
                count: 3,
                isOwnMessage: true,
                time: "14:35"
            },
        ]
    }  ],

    // dataForMenu: {
    //     menuList: [{
    //         label: "Фото или видео",
    //         src: '/public/icons/Union.svg'
    //     },
    //         {
    //             label: "Файл",
    //             src: '/public/icons/file.svg'
    //         },
    //         {
    //             label: "Локация",
    //             src: '/public/icons/location.svg'
    //         }]
    // }
    // 'list': [ Pages.ListPage, {
    //     cats: [
    //         {name: 'cat-1', avatar: cat1},
    //         {name: 'cat-2', avatar: cat2, active: true},
    //         {name: 'cat-3', avatar: cat3},
    //     ],
    //     showDialog: true
    // }],
    'nav': [ Pages.NavigatePage ],
    'test': [Pages.TestPage],
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
